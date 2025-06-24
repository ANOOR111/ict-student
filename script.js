  const student_name=document.querySelector('.data');
                const student_dep=document.querySelector('.data2');
                const adm=document.querySelector('.data3');
                const student_level=document.querySelector('.Ndata');
                const year_study=document.querySelector('.Ndata2');
                const submit=document.querySelector('.send');
                const tableBody=document.querySelector('#studentTable tbody')
            
                const scriptURL='https://script.google.com/macros/s/AKfycbzDvruQKPfGFiyT-zd-EsLpZXv-6px-mb3-cum_P993zIoL6-F6tmvdIbRgJRZ-nk5u5Q/exec'
               const submittedAdms = new Set();

        submit.addEventListener("click", (e) => {
  e.preventDefault();
            let name = student_name.value.trim().toLowerCase();
            let admNo = String(adm.value);
            let department = student_dep.value.trim().toLowerCase();
            let level = Number(student_level.value);
            let study = Number(year_study.value);

      if (submittedAdms.has(admNo)) {
  alert(`⚠️ Admission No. ${admNo} has already submitted!`);
  return;
}

        const check = confirm("Are you sure you want to submit!!");
        const match=students.find(s=>s.adm===admNo);
        
        

  if (match && department==="ict" && level===300 && study===5) {
           submittedAdms.add(admNo);
             document.getElementById('prom').innerHTML = `✅✅  ${name.toUpperCase()} you are a Current student!!`;

    const data = {
            name: name.toUpperCase(),
            admNo,
            department: department.toUpperCase(),
            level: `${level} lev`,
            study:`${study} yrs`
    };

    fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data)
    })
           
    
   
  } 
   

  else {
        alert(`${name} with Admission No. ${admNo} not found in our record!`);

  }

   

  setTimeout(() => {
    document.getElementById('prom').innerHTML = "";
  }, 5000);
});
