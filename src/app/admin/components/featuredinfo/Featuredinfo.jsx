'use client'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredinfo.css"

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Déclarations en Douane</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">145</span>
          <span className="featuredMoneyRate">
            +8% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">par rapport au mois dernier</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Livraisons Finalisées</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">72</span>
          <span className="featuredMoneyRate">
            -5% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">par rapport au mois dernier</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Délai moyen Dédouanement</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">48h</span>
          <span className="featuredMoneyRate">
            -2h <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">par rapport au mois dernier</span>
      </div>
    </div>
  )
}

// 'use client'
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
// import "./featuredinfo.css"

// export default function featuredinfo (){

//     return(
//         <div className="featured">
//           <div className="featuredItem">
//        <span className="featuredTitle">Revenue</span>
//         <div className="featuredMoneyContainer">
//             <span className="featuredMoney">$2,5</span>
//                     <span className="featuredMoneyRate">-11,4<ArrowDownward className="featuredIcon negative"/> </span>

//         </div>
//         <span className="featuredSub">compared to last month</span>
//         </div>
//  <div className="featuredItem">
//        <span className="featuredTitle">Sales</span>
//         <div className="featuredMoneyContainer">
//             <span className="featuredMoney">$1,4</span>
//                     <span className="featuredMoneyRate">-1,4<ArrowDownward className="featuredIcon negative"/> </span>

//         </div>
//         <span className="featuredSub">compared to last month</span>
//         </div>

//          <div className="featuredItem">
//        <span className="featuredTitle">Cost</span>
//         <div className="featuredMoneyContainer">
//             <span className="featuredMoney">$1,25</span>
//                     <span className="featuredMoneyRate">+7,4<ArrowUpward className="featuredIcon"/> </span>

//         </div>
//         <span className="featuredSub">compared to last month</span>
//         </div>

//         </div>

//     )

// }