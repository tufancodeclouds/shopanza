import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  return (
    <section className="max-padd-container mt-16">
        <div className="max-padd-container flexBetween flex-wrap gap-8 rounded-2xl">
            <div className="flexCenter gap-x-3">
                <RiMoneyDollarCircleLine className="text-3xl" />

                <div>
                    <h4 className="bold-16 xl:bold-20">MONEY-BACK GUARANTEE</h4>
                    <p className="medium-15">Not satisfied? Get a full refund</p>
                </div>
            </div>

            <div className="flexCenter gap-x-3">
                <TbTruckDelivery className="text-3xl" />

                <div>
                    <h4 className="bold-16 xl:bold-20">FREE SHIPPING & RETURNS</h4>
                    <p className="medium-15">Free shipping on orders over $99</p>
                </div>
            </div>

            <div className="flexCenter gap-x-3">
                <BiSupport className="text-3xl" />

                <div>
                    <h4 className="bold-16 xl:bold-20">24/7 ONLINE SUPPORT</h4>
                    <p className="medium-15">Our team is here to assist you</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features