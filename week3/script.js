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

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.password = $("#password").val();
  formData.email = $("#email").val();
  console.log("Form Data Submitted: ", formData);
};
