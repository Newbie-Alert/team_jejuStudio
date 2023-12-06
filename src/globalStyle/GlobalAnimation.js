import { keyframes } from 'styled-components'
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const FadeAnimation = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;


export { Toast, FadeAnimation }