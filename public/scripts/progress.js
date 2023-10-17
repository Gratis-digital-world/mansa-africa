const GSmultiStepForm = document.querySelector("[data-multi-step]");
const GSformSteps = [...GSmultiStepForm.querySelectorAll("[data-step]")];

let GScurrentStep = GSformSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (GScurrentStep < 0) {
  GScurrentStep = 0;
  showGSCurrentStep();
}

GSmultiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null || incrementor == 0) return;

  // //Stage - 0
  // const gs_loan_amount = document.getElementById("gs_loan_amount").value.trim();
  // const valStage0 = {
  //   gs_loan_amount,
  // };

  // //Stage - 1
  // const gs_loan_reason = document.getElementById("gs_loan_reason").value.trim();
  // const valStage1 = {
  //   gs_loan_reason,
  // };

  // //Stage - 2
  // const gs_zip = document.getElementById("gs_zip").value.trim();
  // const gs_ssn = document.getElementById("gs_ssn").value.trim();
  // const gs_dob = document.getElementById("gs_dob").value.trim();
  // const gs_dd = document.getElementById("gs_dd").value.trim();
  // const gs_mm = document.getElementById("gs_mm").value.trim();
  // const gs_yy = document.getElementById("gs_yy").value.trim();
  // const valStage2 = {
  //   gs_zip,
  //   gs_ssn,
  //   gs_dob,
  //   gs_dd,
  //   gs_mm,
  //   gs_yy,
  // };

  //   let isValid;
  //   if (incrementor == 1) {
  //     switch (GScurrentStep) {
  //       case 0:
  //         isValid = GSvalidate(valStage0);
  //         break;
  //       case 1:
  //         isValid = GSvalidate(valStage1);
  //         break;
  //       case 2:
  //         isValid = GSvalidate(valStage2);

  //         if (isValid === true) {
  //           //Submit form
  //           const rawdata = {
  //             ...valStage0,
  //             ...valStage1,
  //             ...valStage2,
  //           };

  //           {
  //             sessionStorage.setItem("gs_loan_amount", gs_loan_amount);
  //             sessionStorage.setItem("gs_loan_reason", gs_loan_reason);
  //             sessionStorage.setItem("gs_zip", gs_zip);
  //             sessionStorage.setItem("gs_ssn", gs_ssn);
  //             sessionStorage.setItem("gs_dob", gs_dob);
  //             sessionStorage.setItem("gs_dd", gs_dd);
  //             sessionStorage.setItem("gs_mm", gs_mm);
  //             sessionStorage.setItem("gs_yy", gs_yy);
  //           }
  //           console.log(rawdata);

  //           location.replace("/applicationform");
  //         }

  //         break;
  //       default:
  //         isValid = false;
  //     }
  //   } //Close If

  //   if (isValid === true || incrementor == -1) {
  //     GScurrentStep += incrementor;
  //     showGSCurrentStep();
  //   }

  //   //================

  /*
      Remove comment to test
      Previous and Next Buttons
      without validations
    */
  GScurrentStep += incrementor;
  showGSCurrentStep();
  return;
});

function showGSCurrentStep() {
  GSformSteps.forEach((step, index) => {
    step.classList.toggle("active", index === GScurrentStep);
  });
}

// const GSvalidate = (values) => {
//   let error;
//   let validity = true;

//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//   switch (GScurrentStep) {
//     //=====================================
//     case 0:
//       error = document.getElementById("gs_loan_amount_err");
//       if (!values.gs_loan_amount || values.gs_loan_amount < 250) {
//         error.textContent = "Value can not be less than $250 !";
//         validity = false;
//       } else error.textContent = "";

//       break;

//     case 1:
//       error = document.getElementById("gs_loan_reason_err");
//       if (!values.gs_loan_reason || values.gs_loan_reason == 0) {
//         error.textContent = "State the reason for the request.";
//         validity = false;
//       } else error.textContent = "";

//       break;

//     case 2:
//       error = document.getElementById("gs_zip_err");
//       if (!values.gs_zip) {
//         error.textContent = "Provide your zip code.";
//         validity = false;
//       } else error.textContent = "";

//       error = document.getElementById("gs_ssn_err");
//       if (!values.gs_ssn) {
//         error.textContent = "Last 4 digits of your SSN.";
//         validity = false;
//       } else error.textContent = "";

//       error = document.getElementById("gs_dob_err");
//       let minYear = new Date().getFullYear() - 18;

//       if (!values.gs_dd) {
//         error.textContent = "Input a valid date !";
//         validity = false;
//       } else if (!values.gs_mm) {
//         error.textContent = "Specify month of birth !";
//         validity = false;
//       } else if (!values.gs_yy) {
//         error.textContent = "Specify year of birth !";
//         validity = false;
//       } else if (values.gs_yy > minYear) {
//         error.textContent = "18+ years only !";
//         validity = false;
//       } else {
//         error.textContent = "";
//       }

//       break;

//     //=====================================
//   }

//   return validity;
// };
