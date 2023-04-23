import result from './result.json'

const resultHTML = result.map((res) => {
  return `
  <div>
    name: ${res.name}
    group: ${res.group}
    assistant: ${res.assistant}
    <br>
    student: ${res.student.map((student) => {
    return `
        <div>
          name: ${student.name}
          group: ${student.group}
          assistant: ${student.assistant}
          </div>
      `
  }).join('')}
    
    
  </div>
  <br>

`
})

document.querySelector('#app').innerHTML = `
  <div>
    ${resultHTML.join('')}
  </div>
`


