const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null || incrementor == 0) return;

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

  const valStage1 = {
    firstname_1,
    lastname_1,
    date_of_birth_1,
    country_1,
    role_1,
    percentage_owned_1,
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

  let lastStage;
  let isValid;
  if (incrementor == 1) {
    //if begins
    switch (currentStep) {
      case 0:
        isValid = validate(valStage0);
        break;
      case 1:
        isValid = validate(valStage1);
        break;
      case 2:
        isValid = validate(valStage2);

        if (isValid == true) {
          //Submit form
          const rawdata = {
            ...valStage0,
            ...valStage1,
            ...valStage2,
          };

          lastStage = 2;

          // console.log(rawdata);

          const f_info = new FormData(multiStepForm);

          submitToExcelSheet(f_info);

          // //First Make Sure upload is successful
          // const upRes = uploadDocuments(f_info);

          location.replace(
            "/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm"
          );
        }

        break;
      default:
        isValid = false;
    }
  } //Close If

  if ((isValid === true || incrementor == -1) && !(lastStage == 2)) {
    currentStep += incrementor;
    showCurrentStep();
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

      if (!values.company_logo)
        error.textContent = "The company logo is missing !";
      else if (!values.cert_of_inc)
        error.textContent = "Please provide the certificate of incorporation !";
      else if (!values.mou)
        error.textContent =
          "Please provide the memorandum and articles of association !";
      else if (!values.tax_cert)
        error.textContent = "Missing tax certificate !";
      else error.textContent = "";

      if (error.textContent == "") validity = true;

      break;

    case 1:
      error = document.getElementById("stage2-err");
      validity = false;

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
      else error.textContent = "";

      if (error.textContent == "") validity = true;

      break;

    case 2:
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

      break;

    //=====================================
  }

  return validity;
};

const submitToExcelSheet = (data) => {
  //===========================
  const url =
    "https://script.google.com/macros/s/AKfycbxmyF9NbwBVJKlY5nFyCWY_OMKrM249GMMvYG-J53nB4ryZvBoyOIdkuEwNS8bYqVml/exec";

  const msg = document.getElementById("stage3-err");

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then(() => {
      //upload files
      //uploadDocuments(data);
      //===================
      //Set success message
      msg.innerHTML = "Application completed !";

      //Clear displayed message
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);

      //Clear form
      // multiStepForm.reset();
    })

    .catch((err) => {
      // console.log(error);

      //Set error message
      msg.innerHTML = err.message;

      //Clear displayed message
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
    });

  //===========================
};

const uploadDocuments = (upload_data) => {
  const msg = document.getElementById("stage3-err");

  //upload files
  fetch("http://localhost:3001/upload", {
    method: "POST",
    body: upload_data,
  })
    .then((response) => {
      console.log("Successful Upload!");
      // console.log(response.json());
      // console.log(response);

      //Set success message
      //==========================
      msg.innerHTML = "Loading ... !";

      //Clear displayed message
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      //==========================

      //call sheet update
      // submitToExcelSheet(upload_data);
    })
    .then((data) => {
      console.log("xxc");
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  //===================
};
