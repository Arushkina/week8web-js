const text = document.getElementById('text');
text.innerHTML = text.innerHTML.replace(/\b\w{9,}\b/g, '<span class="highlight">$&</span>');


const sourceLink = document.createElement('a');
sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
sourceLink.textContent = 'Link';
text.insertAdjacentElement('afterend', sourceLink);


text.innerHTML = text.innerHTML.replace(/\.\s+/g, '.<br>'); //separate


const words = text.textContent.split(' ').filter(word => word !== '');
const wordCount = words.length;
document.querySelector('h1').insertAdjacentHTML('afterend', `<p>Word Count: ${wordCount}</p>`);
