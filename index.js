// Select all navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    // Add event listener for mouseover
    anchor.addEventListener('mouseover', function() {
        // Generate random color values for RGB
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // Apply the random color to the link's text color
        this.style.color = '#' + randomColor;
    });

    // Reset the color on mouseout
    anchor.addEventListener('mouseout', function() {
        this.style.color = '#fff'; // Reset to white
    });
});

// testimonials 
document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy tất cả các đánh giá và mũi tên
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevArrow = document.querySelector('.testimonial-arrow.prev');
    const nextArrow = document.querySelector('.testimonial-arrow.next');

    let currentTestimonial = 0; // Chỉ số của đánh giá hiện tại

    // Hàm cập nhật hiển thị đánh giá
    function updateTestimonials(index) {
        // Đầu tiên, xóa lớp 'active' khỏi tất cả các đánh giá
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        
        // Thêm lớp 'active' cho đánh giá hiện tại
        testimonials[index].classList.add('active');
    }

    // Sự kiện khi bấm vào mũi tên trước
    prevArrow.addEventListener('click', () => {
        // Giảm chỉ số của đánh giá hiện tại và quay vòng nếu cần
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonials(currentTestimonial);
    });

    // Sự kiện khi bấm vào mũi tên tiếp theo
    nextArrow.addEventListener('click', () => {
        // Tăng chỉ số của đánh giá hiện tại và quay vòng nếu cần
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonials(currentTestimonial);
    });

    // Khởi tạo đánh giá đầu tiên là 'active'
    updateTestimonials(currentTestimonial);
});

// CTA section 
document.addEventListener('DOMContentLoaded', function() {
    // Function to show congratulation message
    function showCongratulationMessage() {
        // Create the message element
        var message = document.createElement('div');
        message.setAttribute('id', 'congratulationMessage');
        message.style.position = 'fixed';
        message.style.left = '50%';
        message.style.top = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.backgroundColor = '#fff';
        message.style.padding = '20px';
        message.style.borderRadius = '10px';
        message.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        message.style.zIndex = '1000';
        message.style.textAlign = 'center';
        message.innerHTML = '<h2>Congratulations!</h2><p>You have successfully joined the GreenGrow Community.</p>';

        // Append the message to the body
        document.body.appendChild(message);

        // Remove the message after 5 seconds
        setTimeout(function() {
            document.body.removeChild(message);
        }, 5000);
    }

    // Get the form element and attach the submit event listener
    var form = document.querySelector('.cta-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submit action
        showCongratulationMessage(); // Show the congratulation message
        // Here you can also add your form submit logic or AJAX call
    });
});

//contact
// Function to open the contact popup
function openPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
}

// Function to close the contact popup
function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

// Add event listener to the Contact nav item
document.querySelector('#nav .contact-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default link behavior
    openPopup();  // Open the popup
});


document.querySelectorAll('#nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});
