let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const wishlistContainer = document.getElementById('wishlist');
    const passwordInput = document.getElementById('passwordInput');

    // Set your desired password (replace 'yourpassword' with the actual password)
    const correctPassword = '1234';

    function displayWishlist() {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

        wishlistContainer.innerHTML = '';

        wishlistItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'wishlist-item';

            const link = document.createElement('a');
            link.href = item.url;
            link.textContent = item.name;

            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', () => removeItem(index));

            listItem.appendChild(link);
            listItem.appendChild(removeBtn);

            wishlistContainer.appendChild(listItem);
        });
    }

    window.addItem = function () {
        const itemNameInput = document.getElementById('itemNameInput');
        const itemUrlInput = document.getElementById('itemUrlInput');

        // Check if either input box is empty
        if (itemNameInput.value.trim() === '' || itemUrlInput.value.trim() === '') {
            alert('Please enter both item name and link.');
            return; // Stop the function if either input box is empty
        }

        const enteredPassword = prompt('Enter the password:');

        // Check if the entered password is correct
        if (enteredPassword === correctPassword) {
            const newItem = {
                name: itemNameInput.value,
                url: itemUrlInput.value
            };

            const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlistItems.push(newItem);

            localStorage.setItem('wishlist', JSON.stringify(wishlistItems));

            displayWishlist();

            // Clear input fields
            itemNameInput.value = '';
            itemUrlInput.value = '';
        } else {
            // Display an alert for incorrect password
            alert('Incorrect password. Item not added.');
        }
    };

    function removeItem(index) {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlistItems.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
        displayWishlist();
    }

    displayWishlist();
});
