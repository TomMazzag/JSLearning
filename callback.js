const result = document.getElementById('result');

let approval = 'Not approved!';

function getApproval(callback) {
  setTimeout(() => {
    approval = 'Approved!';
    callback();
  }, 1500);
}

getApproval(() => {
    result.textContent = approval;
});
result.textContent = approval;