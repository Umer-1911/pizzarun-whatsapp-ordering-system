import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2, ShoppingBag, Send } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { BUSINESS_INFO } from '../constants/data';

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'COD'
  });

  if (!isCartOpen) return null;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setStep('checkout');
  };

  const handleSubmitOrder = (e: FormEvent) => {
    e.preventDefault();
    
    // Generate WhatsApp message
    const itemsList = cart.map(item => `${item.name} x ${item.quantity} = Rs ${item.price * item.quantity}`).join('\n');
    const message = `*NEW ORDER - PIZZA RUN*\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Total Items:* ${totalItems}\n` +
      `*Total Amount:* Rs ${totalPrice}\n\n` +
      `*Customer Details:*\n` +
      `- Name: ${formData.name}\n` +
      `- Address: ${formData.address}\n` +
      `- Payment Method: ${formData.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}\n\n` +
      `Please confirm my order!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    setIsCartOpen(false);
    setStep('cart');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-full sm:h-auto max-h-[95vh] sm:max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900 sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="p-2 sm:p-3 bg-brand-red/10 rounded-xl sm:rounded-2xl text-brand-red">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                {step === 'cart' ? 'Your Cart' : 'Checkout'}
              </h2>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setStep('cart');
              }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {step === 'cart' ? (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 text-brand-red font-bold hover:underline"
                    >
                      Go back to menu
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 sm:space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 group">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 border dark:border-zinc-800">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white truncate">{item.name}</h3>
                          <p className="text-brand-red font-black text-sm sm:text-base">Rs {item.price}</p>
                          <div className="flex items-center space-x-3 mt-1 sm:mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                            >
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <span className="font-bold w-6 text-center text-sm sm:text-base">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors sm:opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="w-full py-3 sm:py-4 border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-xl sm:rounded-2xl text-gray-500 dark:text-gray-400 font-bold hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Add More Items</span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-brand-red transition-all text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    Delivery Address
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-zinc-800 border-none focus:ring-2 focus:ring-brand-red transition-all min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                    placeholder="Enter your complete address"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 uppercase tracking-wider">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all text-center font-bold text-xs sm:text-sm ${
                        formData.paymentMethod === 'COD'
                          ? 'border-brand-red bg-brand-red/5 text-brand-red'
                          : 'border-gray-100 dark:border-zinc-800 text-gray-500'
                      }`}
                    >
                      Cash on Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'ONLINE' })}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all text-center font-bold text-xs sm:text-sm ${
                        formData.paymentMethod === 'ONLINE'
                          ? 'border-brand-red bg-brand-red/5 text-brand-red'
                          : 'border-gray-100 dark:border-zinc-800 text-gray-500'
                      }`}
                    >
                      Online Payment
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-8 border-t dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">Total Amount</p>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">Rs {totalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">Items</p>
                  <p className="text-lg sm:text-xl font-bold text-brand-red">{totalItems}</p>
                </div>
              </div>

              {step === 'cart' ? (
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-brand-red text-white py-4 sm:py-5 rounded-xl sm:rounded-[24px] font-black text-lg sm:text-xl shadow-xl shadow-brand-red/20 hover:bg-red-700 transition-all flex items-center justify-center space-x-3"
                >
                  <span>Place Order</span>
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              ) : (
                <div className="flex flex-col gap-3 sm:gap-4">
                  <button
                    form="checkout-form"
                    type="submit"
                    className="w-full bg-brand-red text-white py-4 sm:py-5 rounded-xl sm:rounded-[24px] font-black text-lg sm:text-xl shadow-xl shadow-brand-red/20 hover:bg-red-700 transition-all flex items-center justify-center space-x-3"
                  >
                    <span className="text-sm sm:text-base">Confirm & Send to WhatsApp</span>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={() => setStep('cart')}
                    className="w-full py-2 sm:py-3 text-gray-500 font-bold hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-sm sm:text-base"
                  >
                    Back to Cart
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
