function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function verifyStudent() {
  const id = document.getElementById('identifier').value.trim();
  if (!id) return showToast('⚠️ Enter valid Email or ID');

  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block';

  setTimeout(() => {
    const student = {
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "Dummy University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "https://via.placeholder.com/130",
      assignments: [true, false, true, true],
      certificate: "#"
    };

    document.getElementById('verifyModal').classList.add('hide');

    const html = `
      <div class="card">
        <img src="${student.photo}" alt="Photo"/>
        <h3>${student.name}</h3>
        <p>Email: ${student.email}</p>
        <p>Mobile: ${student.mobile}</p>
        <p>Domain: ${student.domain}</p>
        <p>College: ${student.college}</p>
        <p>Start: ${student.start}</p>
        <p>Duration: ${student.duration}</p>
        <h4>Assignments</h4>
        <div class="assignment-status">${student.assignments.map((d, i) =>
          `<span>A${i + 1}: ${d ? '✅' : '❌'}</span>`).join('')}</div>
        <p>Status: Completed</p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;

    document.getElementById('result').innerHTML = html;
    spinner.style.display = 'none';
    showToast('✅ Verification complete');
  }, 1200);
}
