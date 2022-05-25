import React from 'react';

const BuyModal = ({ buy, setBuy }) => {
    const { _id, name } = buy;

    const handleBuying = e => {
        e.preventDefault();
        const price = e.target.name.value;
        console.log(_id, price, name);
        setBuy(null);
    }

    return (
        <div>
            <input type="checkbox" id="buy-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="buy-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Buy for:{name}</h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={name} className="input w-full max-w-xs" />

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select</option>
                            <option>Nano tools</option>
                            <option>Big tools</option>
                        </select>

                        <input type="text" name="name" placeholder="Your Name" className="input w-full max-w-xs" />
                        <input type="email" name="name" placeholder="Your Email" className="input w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;