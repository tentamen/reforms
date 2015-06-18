(ns examples.simple
  (:require [om-forms.core :as f :include-macros true]
            [om.core :include-macros true :as om]
            [sablono.core :refer-macros [html]]
            [examples.shared.utils :refer [inspector-view]]))

(def app-state (atom {:customer {:type :private}}))

(defmulti render-details :type)

(defmethod render-details :private
  [customer]
  (list
    (f/text "First name"
            ""
            customer [:first])
    (f/text "Last name"
            ""
            customer [:last])))

(defmethod render-details :corporate
  [customer]
  (list
    (f/text "Company name"
            ""
            customer [:company-name])
    (f/text "Reg number"
            ""
            customer [:reg-no])
    (f/select "Country" customer [:country]
              [[:us "USA"] [:gb "United Kingdom"] [:pl "Poland"] [:de "Germany"]])))

(defn render-address
  [customer]
  (list
    (f/text "Address 1"
            "Enter address line 1"
            customer [:address1])
    (f/text "Address 2"
            "Enter address line 2"
            customer [:address2])
    (f/text "City"
            "Enter city name"
            customer [:city])))

(defn customer-form-view
  [customer _owner]
  (reify
    om/IRender
    (render [_]
      (html
        (f/with-options
          {:group-title {:tag :h3}
           :form {:horizontal true}}
          (f/form
            (f/group-title {:class "group-title-main"} "Customer info")
            (f/select "Customer type" customer [:type]
                      [[:private "Private"] [:corporate "Corporate"]])
            (f/group-title {:class "group-title-minor"} "Details")
            (render-details customer)
            (f/group-title {:class "group-title-minor"} "Address")
            (render-address customer)
            (f/group-title {:class "group-title-main"} "Chosen login")
            (f/text "Login" "Choose your login" customer [:login])
            (f/password "Password" "Enter your password" customer [:password])
            (f/form-buttons
              (f/button "Save" #(js/alert "clicked")))))))))

(defn main-view
  [app-state _owner]
  (reify
    om/IRender
    (render [_]
      (html
        [:div
         [:br]
         [:br]
         (om/build customer-form-view (:customer app-state))
         (om/build inspector-view app-state)]))))

(om/root
  main-view
  app-state
  {:target (. js/document (getElementById "app"))})