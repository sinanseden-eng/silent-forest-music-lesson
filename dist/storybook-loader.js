'use strict';
// Load the owner's existing publication directly; the lesson does not duplicate its text.
const bookOrigin='https://raw.githubusercontent.com/sinanseden-eng/silent-forest/a6707a7c82d7aac9f1ec7031de700c6de6f07282/';
const frame=document.getElementById('book-frame');
const statusPanel=document.getElementById('book-status');
const statusText=document.getElementById('book-status-text');
const retryButton=document.getElementById('retry-book');
const fallback=document.getElementById('book-fallback');
const chapterValue=Number(new URLSearchParams(location.search).get('chapter'));
const chapter=Number.isInteger(chapterValue)&&chapterValue>=0&&chapterValue<=16?chapterValue:1;
let controller=null,readyTimeout=null;
function fail(message){clearTimeout(readyTimeout);statusPanel.hidden=false;statusText.textContent=message;retryButton.hidden=false;fallback.hidden=false;}
async function loadBook(){
 controller?.abort();controller=new AbortController();clearTimeout(readyTimeout);
 statusPanel.hidden=false;statusText.textContent='Loading your storybook from GitHub…';retryButton.hidden=true;fallback.hidden=true;
 const fetchTimeout=setTimeout(()=>controller.abort(),20000);
 try{
  const response=await fetch(bookOrigin+'index.html',{signal:controller.signal,credentials:'omit',mode:'cors'});
  if(!response.ok)throw new Error('Book request failed');
  let source=await response.text();
  clearTimeout(fetchTimeout);
  if(!/<html\b/i.test(source)||!source.includes('toclist')||!source.includes('window.goTo'))throw new Error('Unexpected book format');
  const head=`<base href="${bookOrigin}"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https://raw.githubusercontent.com data:; style-src 'unsafe-inline'; script-src 'unsafe-inline';">`;
  source=source.replace(/<head([^>]*)>/i,match=>match+head);
  const bridge=`<script>(function(){const chapter=${chapter};try{if(chapter===0){window.goTo(0);}else{const target=Array.from(document.querySelectorAll('#toclist button')).find(b=>Number(b.textContent.split('·')[0].trim())===chapter);if(target)window.goTo(Number(target.dataset.i));}parent.postMessage({type:'silent-forest-ready'},'*');}catch(e){parent.postMessage({type:'silent-forest-error'},'*');}})();</script>`;
  source=source.replace(/<\/body>/i,()=>bridge+'</body>');
  frame.srcdoc=source;
  readyTimeout=setTimeout(()=>fail('The storybook did not finish opening. Check your connection, then try again.'),20000);
 }catch(error){clearTimeout(fetchTimeout);fail('The storybook could not load from GitHub. Check your internet connection or school network, then try again.');}
}
window.addEventListener('message',event=>{if(event.source!==frame.contentWindow)return;if(event.data?.type==='silent-forest-ready'){clearTimeout(readyTimeout);statusPanel.hidden=true;}else if(event.data?.type==='silent-forest-error')fail('The storybook could not open this page. Please try again.');});
window.addEventListener('pagehide',()=>{controller?.abort();clearTimeout(readyTimeout);});
retryButton.addEventListener('click',loadBook);
loadBook();
