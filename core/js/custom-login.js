document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener("click", function (event) {
		if (event.target.id === "lost-password" && window.innerWidth > 1050) {
			document.querySelector(".banner-content").style.display = "none";
			document.querySelector(".have-an-account").style.display = "none";
			document.querySelector(".banner-right-align").addClass("width0");
			document.querySelector(".lines").style.display = "none";
			document.querySelector(".v-align").classList.add("warning-message");
			document.querySelector("footer").classList.add("forgotpass-footer");
		}
		else if (event.target.parentNode.classList.contains("lost-password-container") && window.innerWidth > 1050) {
			document.querySelector(".banner-right-align").classList.remove("width0");
			document.querySelector(".v-align").classList.remove("warning-message");
			document.querySelector("footer").classList.remove("forgotpass-footer");
			document.querySelector(".lines").style.display = "block";
			document.querySelector(".banner-content").style.display = "block";
			document.querySelector(".have-an-account").style.display = "block";
		}
	})
})
