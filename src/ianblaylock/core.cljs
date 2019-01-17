(ns ianblaylock.core)

(let [li-id-map (into {}
                      (map (comp (fn [v] (mapv #(.getElementById js/document %) v))
                                 (juxt #(str % "Li") identity))
                           ["obsMonitor" "quickHydroBrief" "hydroDataViewer"]))]
  (doseq [[li div] li-id-map]
    (set! (.-display (.-style div)) "none")
    (.addEventListener
     li "click"    
     (fn []
       (prn li)
       (doseq [li_ (keys li-id-map)]
         (set! (.-backgroundColor (.-style li_))
               (if (= li_ li) "777777" "aaaaaa"))
         (set! (.-display (.-style (li-id-map li_)))
               (if (= div (li-id-map li_)) "block" "none")))))))




