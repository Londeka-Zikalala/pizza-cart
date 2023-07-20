document.addEventListener('alpine:init', () => {
    Alpine.data('pizzaMenu', () => ({
        quantities: {
            Small: 0,
            Medium: 0,
            Large: 0,
        },
        totalAmount: 0,
        message: '',

        incrementQuantity(size) {
            this.quantities[size]++;
            this.updateTotalAmount();
        },
        decrementQuantity(size) {
            if (this.quantities[size] > 0) {
                this.quantities[size]--;
                this.updateTotalAmount();
            }
        },
        updateTotalAmount() {
            const smallPrice = 31.99;
            const mediumPrice = 58.99;
            const largePrice = 87.99;
            this.totalAmount =
                this.quantities.Small * smallPrice +
                this.quantities.Medium * mediumPrice +
                this.quantities.Large * largePrice;
        },
        pay() {
            this.message = `Payment of $${this.totalAmount.toFixed(2)} successful.`;
        },
    }));
});

