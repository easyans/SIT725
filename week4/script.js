const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};
se;

const cardList = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    desciption: "Demo desciption about kitten 1",
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];

const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

$(document).ready(function () {
  // Other initializations...
  $(".modal").modal();

  // Event listener for the form submit button inside the modal
  $("#formSubmit").click(() => {
    submitForm();
  });
});

const submitForm = () => {
  let formData = {
    first_name: $("#first_name").val(),
    last_name: $("#last_name").val(),
    password: $("#password").val(),
    email: $("#email").val(),
  };

  $.post("/api/user", formData, (response) => {
    console.log(response);
    if (response.statusCode === 201) {
      alert("Form submitted successfully!");
      // You can optionally clear the form here
      // $('#first_name').val('');
      // $('#last_name').val('');
      // $('#password').val('');
      // $('#email').val('');
    } else {
      alert("Submission failed: " + response.message);
    }
  }).fail(() => {
    alert("Server error. Please try again.");
  });
};
