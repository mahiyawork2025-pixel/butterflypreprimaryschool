document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop reload

    // create popup
    const msg = document.createElement("div");
    //msg.innerText = "Enquiry submitted successfully!";
    
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.right = "20px";
    msg.style.background = "#4CAF50";
    msg.style.color = "white";
    msg.style.padding = "15px 20px";
    msg.style.borderRadius = "8px";
    msg.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    msg.style.zIndex = "1000";
    msg.style.transition = "0.3s";
msg.style.opacity = "0";
setTimeout(() => {
    msg.style.opacity = "1";
}, 100);

    document.body.appendChild(msg);

    // remove after 3 sec
    setTimeout(() => {
        msg.remove();
    }, 3000);

    // reset form
    this.reset();
});

