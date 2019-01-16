(ns ianblaylock.core)

;(defn- display-program-description
;  [elementId]
;  (doseq [id ["obsMonitor" "quickHydroBrief" "hydroDataViewer"]]
;    (set! (.-backgroundColor (.-style (.getElementById js/document (str id "Li"))))
;          (if (= elementId id) "#777777" "#aaaaaa"))
;    (set! (.-display (.-style (.getElementById js/document id)))
;          (if (= elementId id) "block" "none"))))

(let [li-id-map (into {}
                      (map (comp (fn [v] (mapv #(.getElementById js/document %) v))
                                 (juxt #(str % "Li") identity))
                           ["obsMonitor" "quickHydroBrief" "hydroDataViewer"]))]
  (prn li-id-map)
  (doseq [[li div] li-id-map]
    (set! (.-display (.-style div)) "none")
    (.addEventListener li "click"
                       (fn []
                         (doseq [li_ (keys li-id-map)]
                           (set! (.-backgroundColor (.-style li_))
                                 (if (= li_ li) "777777" "aaaaaa"))
                           (prn (li-id-map li_)))))))


