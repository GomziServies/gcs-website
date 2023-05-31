// let HOST = 'http://localhost:88';

if (['gcsconsultant.com', 'www.gcsconsultant.com'].includes(window.location.hostname)) {
  HOST = 'https://admin.gcsconsultant.com';
}

let USER_ROUTE = '/admin/user';
let PUBLIC_ROUTE = '/admin/user';
let BASE_URL = HOST + USER_ROUTE;

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData).toString()
  })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Thanks you for contact us',
          text: 'We will contact you soon.'
        })
        event.target.reset();
        $('#myModal').modal('hide');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Details',
          text: 'Please enter valid Details'
        })
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'An error occurred while sending your message',
      })
      console.error(error);
    });
}


// function modalLogin() {
//   const modalHTML = `<div class="modal fade mt-4" id="myModal">
//   <div class="modal-dialog modal-dialog-centered" role="document">
//       <div class="modal-content black-form" style="background-color: #121212;">
//           <div class="modal-header text-center border-0">
//               <div class="text-center">
//                   <img src="./images/mix-img/login.png" class="img-fluid ml-2" width="40%"
//                       alt="Book Free Appointment">
//               </div>
//               <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
//                   <span aria-hidden="true">&times;</span>
//               </button>
//           </div>
//           <div class="modal-body pt-0">
//               <div class="text-center mb-4">
//                   <h4 id="lbl_modal_login">Login With Mobile Number</h4>
//               </div>
//               <form id="loginMobile" class="pupop-form">
//                   <div>
//                       <input type="number" name="mobile" placeholder="Enter Mobile" id="mobile"
//                           class="form-control in-put" required>
//                   </div>
//                   <div class="text-center">
//                       <button type="submit" class="submit-btn btn">Send Otp</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//   </div>
// </div>`;

//   // Append the modal HTML to the document body
//   const modalElement = document.getElementById('modalLogin');
//   modalElement.innerHTML = modalHTML;
//   document.body.appendChild(modalElement);
//   $('#myModal').modal();
// }


// function modalHide() {
//   modelResetTextField()
//   try { $('.modal').modal('hide') } catch (error) { console.log(error) }
//   $('body').removeClass('modal-open');
//   $('.modal-backdrop').remove();
// }

// function modalShow() {
//   modalHide()
//   modelResetTextField()
//   try { $('#modal').modal('show') } catch (error) { console.log(error) }
// }

// function modelResetTextField() {
//   // Find ID starts with txt_ and in ID modal
//   $('#modal input[id^="txt_"]').val(null)
// }

// // LOGIN USING MOBILE OTP

// function modalLogin(action) {
//   $('#div_modal').html(`
//   <div class="modal fade p-0" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content black-form" style="background-color: #121212;">
//               <div class="modal-body">
//                   <button type="button" class="close" style="color:#fff;" data-dismiss="modal" aria-label="Close">
//                       <span aria-hidden="true">&times;</span>
//                   </button>
//                   <div class="text-center">
//                       <img src="../images/mix-img/login.png" class="img-fluid ml-2" width="40%"
//                         alt="Book Free Appointment">
//                   </div>
//                   <form onsubmit="return false">
//                       <div class="page_modal slide-page_modal" style="width:100%!important;">
//                           <div class="">
//                               <h4><div class="label_modal text-center mb-3" id="lbl_modal_login">OTP Verification</div></h4>
//                               <input type="mobile" id="txt_modal_user_name" placeholder="Enter mobile number" class="in-put" style="height: 80%; background-color: white;">
//                           </div>
//                           <div class="mb-3 mt-md-3">
//                               <button type="button" class="submit-btn btn" style="width:100%; margin: 0;" id="btn_modal_login" onclick="modalLoginRequest(this,'${action}')">Log In</button>
//                           </div>
//                           <div class="d-none" style="margin-top: 0px;">
//                               <button type="button" class="submit-btn btn" style="width:100%; margin: 0;">Continue With <i class="mx-1 fab fa-google"></i><i class="mx-1 fab fa-facebook-square"></i><i class="mx-1 fas fa-envelope"></i></button>
//                           </div>
//                       </div>
//                   </form>
//               </div>
//           </div>
//       </div>
//   </div>
//   `);

//   modalShow()

//   $('#div_modal').on('keypress', function (e) {
//     if (((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) && !swal.isVisible()) {
//       $('#btn_modal_login').click();
//     }
//   });
// }


// function modalLoginRequest(element, action) {
//   let user_name = $('#txt_modal_user_name').val().trim()

//   if (!user_name) {
//     return Swal.fire({
//       title: 'Mobile number is missing',
//       icon: 'error'
//     })
//   }
//   value = String(user_name)
//   let payload = {}

//   let mobileRegex = /^[6-9][0-9]{9}$/
//   if (value.match(mobileRegex) && value.match(mobileRegex)[0] == value) {
//     payload.mobile = user_name
//   }

//   $.post({
//     url: HOST + '/pages/gcs/login',
//     contentType: 'application/json',
//     data: JSON.stringify(payload),
//     success: (result) => {
//       const user = result.user;
//       console.log(user);


//       $('#btn_modal_login').attr('onclick', `verifyOTP(this,'mobile','${Object.values(payload)[0]}','${action}')`).html('Verify OTP')
//       $('#btn_modal_login').html('Verify OTP')
//       $('#lbl_modal_login').html('Enter OTP here')

//       // OTP for Testing Environment
//       let OTP = (result.data && result.data.OTP) ? result.data.OTP : undefined;

//       (result.data && result.data.OTP != undefined) ? toastr.warning('You can see OTP only because you are using test version.') : null;

//       $('#txt_modal_user_name').attr('placeholder', `Enter OTP here`).val(OTP || '')
//     },
//     error: (error) => {
//       error = error.responseJSON
//       try {
//         return Swal.fire({
//           title: 'Error',
//           text: error.message,
//           icon: 'error',
//         })
//       } catch (error) {
//         return Swal.fire({
//           title: 'Error',
//           text: 'Something went wrong!',
//           icon: 'error',
//         })
//       }
//     },
//     complete: () => {
//       $(element).removeAttr('disabled')
//     },
//     beforeSend: () => {
//       $(element).attr('disabled', 'disabled')
//     }
//   })
// }


// function verifyOTP(element, type, data, action) {

//   let otp_code = $('#txt_modal_user_name').val().trim()

//   if (!otp_code) {
//     return Swal.fire({
//       title: 'Error',
//       text: 'OTP is required',
//       icon: 'error',
//     })
//   }

//   $.post({
//     url: HOST + '/pages/gcs/verifyotp',
//     contentType: 'application/json',
//     data: JSON.stringify({
//       mobile: data,
//       otp: otp_code
//     }),
//     success: async (result) => {

//       // localStorage.setItem('fg_group_user_authorization', result.data.authorization)
//       // await http_getProfile({ authorization: result.data.authorization })

//       // $.ajaxSetup({
//       //   headers: { 'authorization': localStorage.getItem("fg_group_user_authorization") || alert("header not setup yet") }
//       // })

//       modalHide(result)

//       // Reload page without action=Login parameter
//       let urlParams = new URLSearchParams(window.location.search);
//       if (urlParams.has('action') && urlParams.get('action') == 'Login') {
//         urlParams.delete('action')
//       }

//       if (String(action) != "undefined") {
//         urlParams.set('action', String(action))
//       } else {
//         urlParams.delete('action')
//       }

//       window.location.href = window.location.href.split('?')[0] + (urlParams.toString() != "" ? '?' + urlParams.toString() : '')
//       userInfoCheck()
//       return toastr.success(result.message)
//     },
//     error: (error) => {
//       error = error.responseJSON
//       try {
//         return Swal.fire({
//           title: 'Error',
//           text: error.message,
//           icon: 'error',
//         })
//       } catch (error) {
//         return Swal.fire({
//           title: 'Error',
//           text: 'Something went wrong!',
//           icon: 'error',
//         })
//       }
//     },
//     complete: () => {
//       $(element).removeAttr('disabled')
//     },
//     beforeSend: () => {
//       $(element).attr('disabled', 'disabled')
//     }
//   })
// }