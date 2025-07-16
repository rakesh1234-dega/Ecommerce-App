import React from 'react';

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center max-w-4xl mx-auto px-4 py-16'>
            <p className='text-3xl md:text-4xl font-bold text-white mb-4'>GET 20% OFF YOUR FIRST ORDER</p>
            <p className='text-white/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto'>
                Join our newsletter for exclusive deals, early access to new collections, and style inspiration.
            </p>
            
            {/* Bold Search-Style Input */}
            <form onSubmit={onSubmitHandler} className="w-full max-w-2xl mx-auto">
                <div className="relative flex items-center h-16 shadow-lg">
                    <input 
                        className='flex-grow h-full px-6 text-lg bg-white/5 border-2 border-white/30 rounded-l-full focus:outline-none focus:border-white/50 text-white placeholder-white/40 transition-all backdrop-blur-sm' 
                        type='email' 
                        placeholder='Your email address'
                        required
                    />
                    <button 
                        type="submit" 
                        className='h-full px-8 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-r-full transition-all duration-300 flex items-center justify-center'
                    >
                        SUBSCRIBE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </form>

            <p className="text-white/50 text-sm mt-4">
                By subscribing you agree to our Terms & Privacy Policy
            </p>
        </div>
    )
}

export default NewsLetterBox;