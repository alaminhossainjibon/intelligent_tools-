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
            <input type="checkbox" id="buy-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="buy-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Buy for:{name}</h3>

                    <form onSubmit={handleBuying} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={name} class="input w-full max-w-xs" />

                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Select</option>
                            <option>Nano tools</option>
                            <option>Big tools</option>
                        </select>

                        <input type="text" name="name" placeholder="Your Name" class="input w-full max-w-xs" />
                        <input type="email" name="name" placeholder="Your Email" class="input w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;