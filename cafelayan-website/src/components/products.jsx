import LettuceChips from "../assets/lettuce_chips-2.jpg"

function Products() {

    return(
        <>
            <section className="h-screen px-20 py-10">
                <h1 className="text-[3rem] font-bold text-green-950 border-b border-green-950 w-140">Our Best Selling Product</h1>
                <div className="grid grid-cols-3 gap-10 p-10 ">
                    <div className="col-span-1 ">
                        <img src={LettuceChips} alt="lettuce chips" className="rounded-md shadow-md shadow-black hover:scale-102 transition-transform duration-250 ease-in-out"/>
                    </div>
                    <div className="col-span-2 ">
                        <h2 className="text-green-950 text-[2.5rem] border-b border-green-950 w-110">Cafelayan's Lettuce Chips</h2>
                        <div className="flex flex-col items-center">
                            <p className="font-sans text-center text-[1.5rem] text-red-900 p-10">
                                From classic salted to exciting spicy options, These chips are made with the best ingredients for a satisfying crunch. Whether you're snacking during a movie or having party, or even in a leisure picnic, Cafelayan's Lettuce Chips guarantees a delightful experience. So get ready for Chip-tastic Journey that will leave you craving for more!!
                            </p>
                            <button className="border border-green-950 py-3 px-7 hover:bg-green-950 hover:text-green-50 transition-colors duration-250 ease-in">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Products