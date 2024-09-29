// document.addEventListener('DOMContentLoaded', function() {

//     const formSteps = document.querySelectorAll('.form-step');
//     const nextButtons = document.querySelectorAll('.btn-next');
//     const backButtons = document.querySelectorAll('.btn-back');
//     const submitButton = document.querySelector('.btn-submit');
//     const formElement = document.querySelector('.multi-step-form');

//     // Auto-Advance for the first step
//     document.querySelectorAll('.form-step')[0].querySelectorAll('.btn-answer').forEach(button => {
//         button.addEventListener('click', () => {
//             const currentStep = document.querySelector('.form-step.active');
//             if (currentStep && currentStep.nextElementSibling) {
//                 currentStep.classList.remove('active');
//                 currentStep.nextElementSibling.classList.add('active');
//             }
//         });
//     });

//     // Next button functionality
//     nextButtons.forEach((btn) => {
//         btn.addEventListener('click', () => {
//             const currentStep = document.querySelector('.form-step.active');
//             const input = currentStep.querySelector('input[type="text"], input[type="email"], textarea');
//             const answerButtons = currentStep.querySelectorAll('.btn-answer');
//             const emailInput = currentStep.querySelector('#emailInput'); // Email input added
    
//             // clear any previous error messages
//             const previousErrorMsgs = currentStep.querySelectorAll('.error-msg');
//             previousErrorMsgs.forEach(errorMsg => errorMsg.remove());
    
//             if (input && !input.value) {
//                 const errorMsg = document.createElement('div');
//                 errorMsg.className = 'error-msg';
//                 errorMsg.textContent = 'Vennligst svar på spørsmålet før du fortsetter.';
//                 input.parentElement.insertBefore(errorMsg, input.nextSibling);
//                 return;
//             } else if (answerButtons.length && ![...answerButtons].some(btn => btn.classList.contains('selected'))) {
//                 const errorMsg = document.createElement('div');
//                 errorMsg.className = 'error-msg';
//                 errorMsg.textContent = 'Vennligst velg et alternativ før du fortsetter.';
//                 answerButtons[0].parentElement.insertBefore(errorMsg, answerButtons[0]);
//                 return;
//             } else if (emailInput) { 
//                 // Email validation check
//                 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//                 if (!emailPattern.test(emailInput.value)) {
//                     const errorMsg = document.createElement('div');
//                     errorMsg.className = 'error-msg';
//                     errorMsg.textContent = 'Please enter a valid email.';
//                     emailInput.parentElement.insertBefore(errorMsg, emailInput.nextSibling);
//                     return;
//                 }
//                 const nameInput = currentStep.querySelector('input[type="text"]');
//                 if (!nameInput.value) {
//                     const errorMsg = document.createElement('div');
//                     errorMsg.className = 'error-msg';
//                     errorMsg.textContent = 'Vennligst fyll inn fullt navn.';
//                     nameInput.parentElement.insertBefore(errorMsg, nameInput.nextSibling);
//                     return;
//                 }
//             }
    
//             if (currentStep && currentStep.nextElementSibling) {
//                 currentStep.classList.remove('active');
//                 currentStep.nextElementSibling.classList.add('active');
//             }
//         });
//     });

//     // Make answer buttons selectable
//     document.querySelectorAll('.btn-answer').forEach(button => {
//         button.addEventListener('click', () => {
//             button.parentElement.querySelectorAll('.btn-answer').forEach(btn => btn.classList.remove('selected'));
//             button.classList.add('selected');
//         });
//     });

//     // Back button functionality
//     backButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const currentStep = document.querySelector('.form-step.active');
//             if (currentStep && currentStep.previousElementSibling) {
//                 currentStep.classList.remove('active');
//                 currentStep.previousElementSibling.classList.add('active');
//             }
//         });
//     });

// // Submit form functionality
// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     const currentStep = document.querySelector('.form-step.active');
//     const finalStep = document.querySelector('.form-step:last-child');
//     const phoneInput = currentStep.querySelector('#phoneInput'); // Phone input reference

//     // clear any previous error messages
//     const previousErrorMsgs = currentStep.querySelectorAll('.error-msg');
//     previousErrorMsgs.forEach(errorMsg => errorMsg.remove());

//     if (phoneInput && !phoneInput.value) {
//         const errorMsg = document.createElement('div');
//         errorMsg.className = 'error-msg';
//         errorMsg.textContent = 'Vennligst fyll inn telefonnummeret ditt.';
//         phoneInput.parentElement.insertBefore(errorMsg, phoneInput.nextSibling);
//         return;
//     }
    
//     if (currentStep !== finalStep) {
//         if (currentStep && currentStep.nextElementSibling) {
//             currentStep.classList.remove('active');
//             currentStep.nextElementSibling.classList.add('active');
//         }
//     } else {
//         formElement.submit();
//     }
// });

// });