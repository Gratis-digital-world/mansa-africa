const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

let lastStage;
multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null || incrementor == 0) return;

  //Stage - 41
  const c_firstname = document.getElementById("c_firstname").value.trim();
  const c_lastname = document.getElementById("c_lastname").value.trim();
  const c_phone_number = document.getElementById("c_phone_number").value.trim();
  const c_email_address = document
    .getElementById("c_email_address")
    .value.trim();

  const valStage41 = {
    c_firstname,
    c_lastname,
    c_phone_number,
    c_email_address,
  };

  //Stage - 0
  const company_logo = document.getElementById("company_logo").value.trim();
  const cert_of_inc = document.getElementById("cert_of_inc").value.trim();
  const mou = document.getElementById("mou").value.trim();
  const tax_cert = document.getElementById("tax_cert").value.trim();

  const valStage0 = {
    company_logo,
    cert_of_inc,
    mou,
    tax_cert,
  };

  //Stage - 1
  const firstname_1 = document.getElementById("firstname_1").value.trim();
  const lastname_1 = document.getElementById("lastname_1").value.trim();
  const date_of_birth_1 = document
    .getElementById("date_of_birth_1")
    .value.trim();
  const country_1 = document.getElementById("country_1").value.trim();
  const role_1 = document.getElementById("role_1").value.trim();
  const percentage_owned_1 = document
    .getElementById("percentage_owned_1")
    .value.trim();

  const dd = document.getElementById("dd").value.trim();
  const mm = document.getElementById("mm").value.trim();
  const yy = document.getElementById("yy").value.trim();

  const valStage1 = {
    firstname_1,
    lastname_1,
    date_of_birth_1,
    country_1,
    role_1,
    percentage_owned_1,
    dd,
    mm,
    yy,
  };

  //Stage - 2
  const ubo_firstname_1 = document
    .getElementById("ubo_firstname_1")
    .value.trim();
  const ubo_lastname_1 = document.getElementById("ubo_lastname_1").value.trim();
  const ubo_shares_1 = document.getElementById("ubo_shares_1").value.trim();

  const emp_firstname_1 = document
    .getElementById("emp_firstname_1")
    .value.trim();
  const emp_lastname_1 = document.getElementById("emp_lastname_1").value.trim();
  const emp_bio_1 = document.getElementById("emp_bio_1").value.trim();
  const emp_resume_1 = document.getElementById("emp_resume_1").value.trim();

  const authorization_letter = document
    .getElementById("authorization_letter")
    .value.trim();
  const questionnaire = document.getElementById("questionnaire").value.trim();
  const con_agreement = document.getElementById("con_agreement").value.trim();

  const asoc_mem_1 = document.getElementById("asoc_mem_1").value.trim();

  const valStage2 = {
    ubo_firstname_1,
    ubo_lastname_1,
    ubo_shares_1,
    emp_firstname_1,
    emp_lastname_1,
    emp_bio_1,
    emp_resume_1,
    authorization_letter,
    questionnaire,
    con_agreement,
    asoc_mem_1,
  };

  // let lastStage;
  let isValid;
  if (incrementor == 1) {
    //if begins
    switch (currentStep) {
      case 0:
        isValid = validate(valStage41);
        break;
      case 1:
        isValid = validate(valStage0);
        break;
      case 2:
        isValid = validate(valStage1);
        break;
      case 3:
        isValid = validate(valStage2);

        if (isValid == true) {
          //Submit form
          const rawdata = {
            ...valStage41,
            ...valStage0,
            ...valStage1,
            ...valStage2,
          };

          lastStage = 3;

          // console.log(rawdata);

          // const f_info = new FormData(multiStepForm);

          // //First Make Sure upload is successful
          // uploadDocuments(f_info);

          // location.replace(
          //   "/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm"
          // );
        }

        break;
      default:
        isValid = false;
    }
  } //Close If

  // if ((isValid === true || incrementor == -1) && !(lastStage == 3)) {
  //   currentStep += incrementor;
  //   showCurrentStep();
  // }

  // const f_info = new FormData(multiStepForm);

  // if (isValid === true || incrementor == -1) {
  //   currentStep += incrementor;
  //   if (incrementor == 1) {
  //     // update form
  //     uploadPart(f_info);
  //   }
  //   if (!(lastStage == 3)) {
  //     showCurrentStep();
  //   }
  // }

  const f_info = new FormData(multiStepForm);
  f_info.append("stage", currentStep);
  f_info.append("ubo_id_key", c_email_address);
  f_info.append("emp_id_key", c_email_address);
  f_info.append("mem_id_key", c_email_address);
  f_info.append("owner_id_key", c_email_address);

  if (isValid === true || incrementor == -1) {
    currentStep += incrementor;
    if (incrementor == 1 && !(lastStage == 3)) {
      // update form
      uploadPart(f_info);
    }
    if (!(lastStage == 3)) {
      showCurrentStep();
    } else {
      uploadDocuments(f_info);
    }
  }

  //================

  /*
      Remove comment to test
      Previous and Next Buttons
      without validations
    */
  // currentStep += incrementor;
  // showCurrentStep();
  // return;
});

function showCurrentStep() {
  sessionStorage.setItem("closepage", false);
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

const validate = (values) => {
  let error;
  let validity = true;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  switch (currentStep) {
    //=====================================
    case 0:
      error = document.getElementById("stage1-err");
      validity = false;

      // const phonePattern = /^\d{10}$/;
      const phonePattern =
        /^\d{10}$|^\d{3}[-\s]\d{3}[-\s]\d{4}$|^\(\d{3}\)[-\s]\d{3}[-\s]\d{4}$/;

      if (!values.c_firstname) error.textContent = "Provide the first name !";
      else if (!values.c_lastname)
        error.textContent = "Provide the last name !";
      else if (!values.c_phone_number)
        error.textContent = "Provide the contact phone number !";
      else if (!phonePattern.test(values.c_phone_number))
        error.textContent = "Invalid phone number !";
      else if (!values.c_email_address)
        error.textContent = "Provide the contact email address !";
      else if (!regex.test(values.c_email_address))
        error.textContent = "This is not a valid e-mail !";
      else error.textContent = "";

      if (error.textContent == "") validity = true;
      sessionStorage.setItem("labelError", "Contact person");

      sessionStorage.setItem("app_email", values.c_email_address);

      break;

    case 1:
      error = document.getElementById("stage1-err");
      validity = false;

      if (!values.company_logo)
        error.textContent = "The company logo is missing !";
      else if (!values.cert_of_inc)
        error.textContent = "Certificate of incorporation is missing !";
      else if (!values.mou)
        error.textContent =
          "Memorandum and articles of association is missing !";
      else if (!values.tax_cert)
        error.textContent = "Missing tax certificate !";
      else error.textContent = "";

      if (error.textContent == "") validity = true;
      sessionStorage.setItem("labelError", "Company Info.");

      break;

    case 2:
      error = document.getElementById("stage2-err");
      validity = false;
      let minYear = new Date().getFullYear() - 18;

      if (!values.firstname_1)
        error.textContent = "Provide a valid first name.";
      else if (!values.lastname_1)
        error.textContent = "Provide a valid last name.";
      else if (!values.date_of_birth_1)
        error.textContent = "Date of birth is missing !";
      else if (!values.country_1)
        error.textContent = "Specify country of origin.";
      else if (!values.role_1)
        error.textContent = "Indicate role/designation at the company.";
      else if (!values.percentage_owned_1)
        error.textContent = "Specify percentage of the company owned.";
      // else error.textContent = "";
      // error = document.getElementById("dob_err");
      //***************************** */
      // let minYear = new Date().getFullYear() - 18;
      else if (!values.dd) {
        error.textContent = "Input a valid date !";
        validity = false;
      } else if (!values.mm) {
        error.textContent = "Specify month of birth !";
        validity = false;
      } else if (!values.yy) {
        error.textContent = "Specify year of birth !";
        validity = false;
      } else if (values.yy > minYear) {
        error.textContent = "Applicant must be 18 years and above !";
        validity = false;
      } else {
        error.textContent = "";
      }

      if (error.textContent == "") validity = true;
      sessionStorage.setItem("labelError", "Profiles");

      break;

    case 3:
      validity = false;

      error = document.getElementById("ubo-1-err");
      if (!values.ubo_firstname_1)
        error.textContent = "Provide a valid first name.";
      else if (!values.ubo_lastname_1)
        error.textContent = "Provide a valid last name.";
      else if (!values.ubo_shares_1)
        error.textContent = "Enter the number of shares owned in the company.";
      else error.textContent = "";

      if (error.textContent !== "") {
        document.getElementById(
          "stage3-err"
        ).textContent = `UBO: ${error.textContent}`;
      } else if (error.textContent == "") {
        error = document.getElementById("emp-1-err");
        if (!values.emp_firstname_1)
          error.textContent = "Provide a valid first name.";
        else if (!values.emp_lastname_1)
          error.textContent = "Provide a valid last name.";
        else if (!values.emp_bio_1)
          error.textContent =
            "Please provide a brief biography of the executive.";
        else if (!values.emp_resume_1)
          error.textContent = "Upload a resume for the executive.";
        else error.textContent = "";
      }

      if (error.textContent !== "") {
        document.getElementById(
          "stage3-err"
        ).textContent = `EMP: ${error.textContent}`;
      } else {
        if (error.textContent == "") {
          error = document.getElementById("stage3-err");
          if (!values.authorization_letter)
            error.textContent = "Upload the MANSA authorization letter !";
          else if (!values.questionnaire)
            error.textContent = "Upload the MANSA questionnaire for SMEs !";
          else if (!values.con_agreement)
            error.textContent = "Upload the MANSA contribution agreement !";
          // else if (!values.asoc_mem_1)
          //   error.textContent = "Upload the membership certificate !";
          else error.textContent = "";
        }
      }

      if (error.textContent == "") validity = true;
      sessionStorage.setItem("labelError", "UBOs / EMPs");

      break;

    //=====================================
  }

  sessionStorage.setItem("validationError", error.textContent);
  error.textContent = "";

  return validity;
};

const uploadDocuments = (upload_data) => {
  const msg = document.getElementById("stage3-err");
  //********************** */
  var nextBtn = document.querySelectorAll("[id='nextButton']");

  // for (var i = 0; i < nextBtn.length; i++) {
  //   nextBtn[i].disabled = true;
  // }
  if (lastStage == 3) {
    nextBtn[nextBtn.length - 1].disabled = true;
    nextBtn[nextBtn.length - 1].innerHTML = "Processing ...";
    //  nextBtn[i].textContent = "processing ..."
  }
  //********************** */

  //upload files
  // msg.innerHTML = "Loading ... !";

  // const u_url = "http://localhost:3001/upload2";
  const u_url = "https://mansa-96a6c794c4b6.herokuapp.com/upload2";

  fetch(u_url, {
    method: "POST",
    body: upload_data,
  })
    .then((response) => {
      sessionStorage.setItem("closepage", true);
      // Get the button element by its ID
      const confettiBtn = document.getElementById("confettiBtn");
      confettiBtn.click();

      //Clear displayed message
      setTimeout(() => {
        // msg.innerHTML = "Done";

        if (lastStage == 3) {
          nextBtn[nextBtn.length - 1].disabled = false;
          nextBtn[nextBtn.length - 1].innerHTML = "Submit";
        }
        confettiBtn.click();
      }, 5000);

      setTimeout(() => {
        location.replace("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
      }, 3000);
      //==========================
    })
    .then((data) => {
      console.log("Works!");
      // console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  //===================
};

const uploadPart = (upload_data) => {
  // const msg = document.getElementById("stage3-err");
  //********************** */
  var nextBtn = document.querySelectorAll("[id='nextButton']");

  // for (var i = 0; i < nextBtn.length; i++) {
  // nextBtn[nextBtn.length - 1].disabled = true;
  //   nextBtn[i].disabled = true;
  // }
  // nextBtn[nextBtn.length - 1].innerHTML = "Processing ...";
  //********************** */

  // const u_url = "http://localhost:3001/upload2";
  const u_url = "https://mansa-96a6c794c4b6.herokuapp.com/upload2";
  //
  fetch(u_url, {
    method: "POST",
    body: upload_data,
  })
    .then((response) => {
      //Clear displayed message
      setTimeout(() => {
        // msg.innerHTML = "Done";
        // for (var i = 0; i < nextBtn.length; i++) {
        // nextBtn[nextBtn.length - 1].disabled = true;
        //   nextBtn[i].disabled = false;
        // }
        // nextBtn[nextBtn.length - 1].disabled = false;
        // nextBtn[nextBtn.length - 1].innerHTML = "Done";
        // location.replace("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
      }, 500);
      //==========================
    })
    .then((data) => {
      console.log("Works in part!");
      // console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  //===================
};

//++++++++++++++++++++++++++++++++++++
function basic() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function randomDirection() {
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
}

function makeItRain() {
  document.getElementById("makeItRain").disabled = true;
  var end = Date.now() + 2 * 1000;

  // go Buckeyes!
  var colors = ["#bb0000", "#ffffff"];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else {
      document.getElementById("makeItRain").disabled = false;
    }
  }
  frame();
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
//++++++++++++++++++++++++++++++++++++
