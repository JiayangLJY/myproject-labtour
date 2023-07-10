/*
 * @Author: jiayangliu
 * @Date: 2023-07-09 18:47:29
 * @Description: Enable popover in boostrap5
 */
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
