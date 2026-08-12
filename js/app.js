/* navigation.js
   All navigation markup + navigation icons live in this file.
   Edit this file if you want to change the sidebar/header navigation.
*/
(function () {
  const icons = {
    dashboard: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>`,
    files: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/></svg>`,
    shared: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.8 19c.5-3.1 2.4-5 5.2-5s4.7 1.9 5.2 5"/><path d="M14 14.5c2.9-.7 5.5 1 6.2 4.5"/></svg>`,
    recent: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.2 2"/><path d="M4 5.5 2.8 8 5.5 9"/></svg>`,
    starred: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/></svg>`,
    links: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 13.8 8.3 15.5a3.5 3.5 0 0 1-5-5l2.5-2.5a3.5 3.5 0 0 1 5 0"/><path d="m14 10.2 1.7-1.7a3.5 3.5 0 0 1 5 5l-2.5 2.5a3.5 3.5 0 0 1-5 0"/><path d="m8.5 12 7-4"/></svg>`,
    help: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.6 2.6 0 1 1 4.5 1.8c-1.1 1-2.1 1.3-2.1 3"/><path d="M12 17h.01"/></svg>`,
    bell: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 8.5h18C21 16 18 16 18 9Z"/><path d="M10 20h4"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a2 2 0 0 0-3.4 1.4v.2a1.7 1.7 0 0 1-3.4 0v-.2a2 2 0 0 0-3.4-1.4l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1A2 2 0 0 0 5 11.6H4.8a1.7 1.7 0 0 1 0-3.4H5a2 2 0 0 0 1.4-3.4l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1A2 2 0 0 0 12.2 1h.2a1.7 1.7 0 0 1 3.4 0v.2a2 2 0 0 0 3.4 1.4l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a2 2 0 0 0 1.4 3.4h.2a1.7 1.7 0 0 1 0 3.4H23a2 2 0 0 0-1.4 3.4Z" transform="scale(.78) translate(3.4 3.4)"/></svg>`,
    search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>`,
    upload: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M5 15v4h14v-4"/></svg>`,
    folderPlus: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><path d="M12 11v6M9 14h6"/></svg>`
  };

  const nav = [
    ["dashboard","Dashboard","dashboard"],
    ["my-files","My Files","files"],
    ["shared","Shared With Me","shared"],
    ["recent","Recent","recent"],
    ["starred","Starred","starred"],
    ["public-links","Public Links","links"]
  ];

  window.MyFilesNavigation = {
    icon(name){ return icons[name] || ""; },
    render(){
      return `
        <aside class="sidebar" id="sidebar">
          <div class="brand">
            <div class="brand-icon">${icons.files}</div>
            <span>My<span>Files</span></span>
            <button class="mobile-close" id="closeSidebar" aria-label="Close navigation">×</button>
          </div>

          <nav class="side-nav" aria-label="Main navigation">
            ${nav.map(([page,label,icon])=>`
              <a href="${page}.html" class="nav-link" data-page="${page}">
                <span class="nav-icon">${icons[icon]}</span>
                <span>${label}</span>
              </a>`).join("")}
          </nav>

          <div class="side-account">
            <div class="avatar">A</div>
            <div class="account-copy"><strong>Aditya Yadav</strong><small>View Profile</small></div>
            <button class="icon-button" id="settingsButton" aria-label="Settings">${icons.settings}</button>
          </div>
        </aside>
        <div class="mobile-overlay" id="mobileOverlay"></div>

        <header class="topbar">
          <button class="menu-button" id="menuButton" aria-label="Open navigation">☰</button>
          <div class="search-box">
            ${icons.search}
            <input id="searchInput" type="search" placeholder="Search files and folders..." autocomplete="off">
            <kbd>⌘ K</kbd>
          </div>
          <div class="top-actions">
            <button class="top-icon" id="helpButton" aria-label="Help">${icons.help}</button>
            <button class="top-icon notification" id="notificationButton" aria-label="Notifications">${icons.bell}<b>3</b></button>
            <div class="account-chip"><div class="avatar small">A</div><strong>Aditya Yadav</strong><span>⌄</span></div>
          </div>
        </header>`;
    }
  };
})();
const DB_NAME="MyFilesDB";
const DB_VERSION=1;
const STORE_FILES="files";
const STORE_FOLDERS="folders";

const state={
  page:document.body.dataset.page||"dashboard",
  folderId:null,
  search:"",
  sort:"name",
  view:"grid",
  files:[],
  folders:[],
  recent:[],
  db:null
};

const icons={
  pdf:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#ff4b57"/><path d="M15 34h18" stroke="#fff" stroke-width="2.2"/><text x="24" y="28" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">PDF</text></svg>`,
  excel:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#13b56a"/><path d="M16 16l16 16M32 16 16 32" stroke="#062d1b" stroke-width="4"/><path d="M28 9h7" stroke="#fff" stroke-width="2"/></svg>`,
  word:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#1677f0"/><path d="M15 16h18M15 22h18M15 28h12" stroke="#fff" stroke-width="2"/><text x="24" y="38" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">W</text></svg>`,
  ppt:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#f05a24"/><path d="M15 15h17v13H15z" fill="none" stroke="#fff" stroke-width="2"/><path d="M18 20h7" stroke="#fff" stroke-width="2"/></svg>`,
  image:`<svg viewBox="0 0 48 48"><rect x="6" y="7" width="36" height="34" rx="5" fill="#7138df"/><circle cx="17" cy="17" r="4" fill="#fff"/><path d="m10 35 10-11 7 7 5-6 7 10" fill="none" stroke="#fff" stroke-width="2.5"/></svg>`,
  zip:`<svg viewBox="0 0 48 48"><path d="M10 5h23l5 5v32H10z" fill="#f1c40f"/><path d="M28 5v7h7" fill="none" stroke="#725900" stroke-width="2"/><path d="M22 11h5v4h-5v4h5v4h-5v4h5v4h-5" fill="none" stroke="#725900" stroke-width="2"/></svg>`,
  csv:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#15b875"/><path d="M13 16h22M13 24h22M13 32h22M21 11v26M29 11v26" stroke="#083b26" stroke-width="2"/></svg>`,
  text:`<svg viewBox="0 0 48 48"><rect x="7" y="4" width="34" height="40" rx="5" fill="#aeb2bd"/><path d="M15 15h18M15 22h18M15 29h14" stroke="#343842" stroke-width="2.4"/></svg>`,
  generic:`<svg viewBox="0 0 48 48"><path d="M10 4h22l6 6v34H10z" fill="#7c3cff"/><path d="M32 4v8h8" fill="none" stroke="#fff" stroke-width="2"/><path d="M16 22h16M16 28h16M16 34h11" stroke="#fff" stroke-width="2"/></svg>`,
  folder:`<svg viewBox="0 0 48 48"><path d="M5 12a5 5 0 0 1 5-5h11l4 5h13a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5z" fill="#6f35ff"/><path d="M7 16h34" stroke="#9d70ff" stroke-width="2"/></svg>`,
  eye:`<svg viewBox="0 0 24 24"><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>`,
  download:`<svg viewBox="0 0 24 24"><path d="M12 4v11"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/></svg>`,
  more:`<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  star:`<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/></svg>`
};

function $(s,r=document){return r.querySelector(s)}
function $$(s,r=document){return [...r.querySelectorAll(s)]}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

function iconFor(name,type=""){
  const ext=name.split(".").pop().toLowerCase();
  if(ext==="pdf"||type.includes("pdf")) return icons.pdf;
  if(["xlsx","xls"].includes(ext)||type.includes("spreadsheet")) return icons.excel;
  if(["doc","docx"].includes(ext)||type.includes("word")) return icons.word;
  if(["ppt","pptx"].includes(ext)) return icons.ppt;
  if(["png","jpg","jpeg","gif","webp","svg"].includes(ext)||type.startsWith("image/")) return icons.image;
  if(["zip","rar","7z"].includes(ext)) return icons.zip;
  if(ext==="csv"||type.includes("csv")) return icons.csv;
  if(ext==="txt"||type.startsWith("text/")) return icons.text;
  return icons.generic;
}

function bytes(size){
  if(size<1024)return size+" B";
  if(size<1024**2)return (size/1024).toFixed(1)+" KB";
  if(size<1024**3)return (size/1024**2).toFixed(1)+" MB";
  return (size/1024**3).toFixed(1)+" GB";
}

function sizeValue(v){
  const m=String(v).match(/([\d.]+)\s*(B|KB|MB|GB)/i); if(!m)return 0;
  return +m[1]*({B:1,KB:1024,MB:1024**2,GB:1024**3}[m[2].toUpperCase()]);
}

function uid(prefix){return prefix+"_"+Date.now()+"_"+Math.random().toString(36).slice(2,8)}

function openDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=e=>{
      const db=e.target.result;
      if(!db.objectStoreNames.contains(STORE_FILES))db.createObjectStore(STORE_FILES,{keyPath:"id"});
      if(!db.objectStoreNames.contains(STORE_FOLDERS))db.createObjectStore(STORE_FOLDERS,{keyPath:"id"});
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}

function tx(store,mode="readonly"){
  return state.db.transaction(store,mode).objectStore(store);
}
function getAll(store){
  return new Promise((resolve,reject)=>{
    const r=tx(store).getAll();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);
  });
}
function put(store,obj){
  return new Promise((resolve,reject)=>{
    const r=tx(store,"readwrite").put(obj);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);
  });
}
function remove(store,id){
  return new Promise((resolve,reject)=>{
    const r=tx(store,"readwrite").delete(id);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);
  });
}

async function seed(){
  const folders=await getAll(STORE_FOLDERS);
  if(!folders.length){
    const names=[["Work",null],["Projects",null],["Documents",null],["Personal",null],["Study",null],["Archives",null]];
    for(const [name,parentId] of names) await put(STORE_FOLDERS,{id:uid("folder"),name,parentId,created:Date.now()});
  }
  const files=await getAll(STORE_FILES);
  if(!files.length){
    const rootFiles=[
      ["App Source.zip","45.2 MB","ZIP"],["Brand Guidelines.pdf","4.8 MB","PDF"],["Budget Planning.xlsx","2.1 MB","Excel"],
      ["Client List.csv","850 KB","CSV"],["Cover Image.jpg","1.8 MB","Image"],["Project Proposal.pdf","2.4 MB","PDF"],
      ["Sales Report.xlsx","1.8 MB","Excel"],["Meeting Notes.docx","560 KB","Word"],["Dashboard Design.png","3.2 MB","Image"],
      ["Resources.zip","12.6 MB","ZIP"],["Readme.txt","1.1 KB","Text"],["Marketing Strategy.pptx","5.7 MB","PowerPoint"]
    ];
    for(let i=0;i<rootFiles.length;i++){
      const [name,size,type]=rootFiles[i];
      await put(STORE_FILES,{id:uid("file"),name,size,type,mime:"",folderId:null,created:Date.now()-i*86400000,modified:Date.now()-i*86400000,starred:i%5===0,shared:i%7===0,publicLink:i%9===0,blob:null});
    }
  }
}

async function load(){
  state.folders=await getAll(STORE_FOLDERS);
  state.files=await getAll(STORE_FILES);
  state.files.forEach(f=>f.icon=iconFor(f.name,f.mime||""));
}

function folderChildren(parentId){
  return state.folders.filter(f=>(f.parentId||null)===(parentId||null));
}
function currentFolder(){return state.folders.find(f=>f.id===state.folderId)||null}
function currentFolderName(){return currentFolder()?.name||"My Files"}

function pathForFolder(id){
  const parts=[];let f=state.folders.find(x=>x.id===id);
  while(f){parts.unshift(f);f=state.folders.find(x=>x.id===f.parentId)}
  return parts;
}

function currentFiles(){
  let list=state.files.filter(f=>(f.folderId||null)===(state.folderId||null));
  const q=state.search.trim().toLowerCase();
  if(q)list=list.filter(f=>f.name.toLowerCase().includes(q)||f.type.toLowerCase().includes(q));
  if(state.sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(state.sort==="desc")list.sort((a,b)=>b.name.localeCompare(a.name));
  if(state.sort==="size")list.sort((a,b)=>sizeValue(b.size)-sizeValue(a.size));
  if(state.sort==="old")list.sort((a,b)=>a.modified-b.modified);
  if(state.sort==="new")list.sort((a,b)=>b.modified-a.modified);
  if(state.sort==="type")list.sort((a,b)=>a.type.localeCompare(b.type));
  return list;
}

function setPage(){
  state.page=document.body.dataset.page||"dashboard";
  if(!["dashboard","my-files","shared","recent","starred","public-links"].includes(state.page)){
    state.page="dashboard";location.href="dashboard.html";
  }
  $$(".nav-link").forEach(a=>a.classList.toggle("active",a.dataset.page===state.page));
  closeMobile();
  render();
}

function shell(content){
  return `${MyFilesNavigation.render()}<main class="main-content">${content}</main>`;
}

function renderDashboard(){
  const shared=state.files.filter(f=>f.shared).length;
  return `<section class="page">
    <div class="page-heading"><div><h1>Welcome back, Aditya! <span class="wave">👋</span></h1><p>Here's what's happening with your files today.</p></div>
    <button class="primary" data-action="upload">${MyFilesNavigation.icon("upload")} Upload New</button></div>
    <div class="stats-grid">
      ${statCard("files","Total Files",state.files.length,"All your files")}
      ${statCard("folders","Total Folders",state.folders.length,"Organized in folders")}
      ${statCard("downloads","Total Downloads",0,"Files downloaded")}
      ${statCard("shared","Files Shared",shared,"Files shared with others")}
    </div>
    <div class="dashboard-layout single-quick"><aside class="quick-panel"><h2>Quick Actions</h2>
        <button data-action="upload">${MyFilesNavigation.icon("upload")}<span>Upload New File</span><b>›</b></button>
        <button data-action="new-folder">${MyFilesNavigation.icon("folderPlus")}<span>Create New Folder</span><b>›</b></button>
        <button data-go="shared">${MyFilesNavigation.icon("shared")}<span>Share a File</span><b>›</b></button>
        <button data-go="public-links">${MyFilesNavigation.icon("links")}<span>Copy Public Link</span><b>›</b></button>
        <button data-go="recent">${MyFilesNavigation.icon("recent")}<span>View Recent Files</span><b>›</b></button>
      </aside>
    </div>
  </section>`;
}
function statCard(type,label,value,sub){
  const i={files:icons.generic,folders:icons.folder,downloads:MyFilesNavigation.icon("upload"),shared:MyFilesNavigation.icon("shared")}[type];
  return `<div class="stat-card"><div class="stat-icon ${type}">${i}</div><div><span>${label}</span><strong>${value}</strong><small>${sub}</small></div></div>`;
}
function recentRows(){
  const list=[...state.files].sort((a,b)=>b.modified-a.modified).slice(0,6);
  if(!list.length)return `<div class="empty">No files yet.</div>`;
  return `<div class="table-head"><span>Name</span><span>Modified</span><span>Size</span><span>Type</span><span>Actions</span></div>`+
  list.map(f=>`<div class="table-row">
    <div class="name-cell"><span class="file-mini">${iconFor(f.name,f.mime||"")}</span><strong>${esc(f.name)}</strong><button class="star ${f.starred?"on":""}" data-action="star" data-id="${f.id}">${icons.star}</button></div>
    <span>${new Date(f.modified).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span><span>${f.size}</span><span>${esc(f.type)}</span>
    <div class="row-actions"><button data-action="download" data-id="${f.id}">${icons.download}</button><button data-action="more" data-id="${f.id}">${icons.more}</button></div>
  </div>`).join("");
}

function renderMyFiles(){
  const folder=currentFolder();
  const folders=folderChildren(state.folderId);
  const files=currentFiles();
  const crumbs=pathForFolder(state.folderId);
  return `<section class="page">
    <div class="page-heading"><div><div class="breadcrumbs"><button data-action="root-folder">My Files</button>${crumbs.map(f=>`<span>/</span><button data-action="open-folder" data-id="${f.id}">${esc(f.name)}</button>`).join("")}</div><h1>${esc(folder?.name||"My Files")}</h1><p>Manage and organize your files</p></div>
      <div class="heading-actions"><button class="secondary" data-action="new-folder">${MyFilesNavigation.icon("folderPlus")} New Folder</button><button class="primary" data-action="upload">${MyFilesNavigation.icon("upload")} Upload New</button></div>
    </div>
    <div class="toolbar"><div class="view-switch"><button class="${state.view==="list"?"active":""}" data-action="view" data-view="list">☷</button><button class="${state.view==="grid"?"active":""}" data-action="view" data-view="grid">▦</button></div>
      <select id="sortSelect"><option value="name">Sort by: Name (A-Z)</option><option value="desc">Name (Z-A)</option><option value="new">Newest</option><option value="old">Oldest</option><option value="size">Largest</option><option value="type">File Type</option></select>
      ${folder?`<button class="secondary compact" data-action="root-folder">← Back</button>`:""}
    </div>
    <div class="section-title"><h2>Folders <em>(${folders.length})</em></h2></div>
    <div class="folder-grid">${folders.length?folders.map(folderCard).join(""):`<div class="folder-empty">No folders here. Create one with <b>New Folder</b>.</div>`}</div>
    <div class="section-title file-title"><h2>Files <em>(${files.length})</em></h2></div>
    <div class="files-${state.view}">${files.length?files.map(fileCard).join(""):`<div class="empty">No files in this folder.</div>`}</div>
  </section>`;
}

function folderCard(f){
  return `<article class="folder-card"><button class="folder-hit" data-action="open-folder" data-id="${f.id}" aria-label="Open ${esc(f.name)}"></button>
    <div class="folder-symbol">${icons.folder}</div><div class="folder-info"><strong>${esc(f.name)}</strong><span>${folderItemCount(f.id)} items</span></div>
    <button class="more-button" data-action="folder-menu" data-id="${f.id}" aria-label="Folder options">${icons.more}</button>
  </article>`;
}
function folderItemCount(id){
  return state.files.filter(f=>f.folderId===id).length+state.folders.filter(f=>f.parentId===id).length;
}

function fileCard(f){
  return `<article class="file-card"><div class="file-top"><span class="file-type-icon">${iconFor(f.name,f.mime||"")}</span><button class="star ${f.starred?"on":""}" data-action="star" data-id="${f.id}" aria-label="Star">${icons.star}</button></div>
    <div class="file-info"><strong title="${esc(f.name)}">${esc(f.name)}</strong><span>${f.size} • ${new Date(f.modified).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span></div>
    <div class="file-card-actions"><button data-action="view-file" data-id="${f.id}">${icons.eye} View</button><button data-action="download" data-id="${f.id}">${icons.download} Download</button><button class="more-only" data-action="more" data-id="${f.id}" aria-label="More">${icons.more}</button></div>
  </article>`;
}

function renderSpecial(page){
  let list=[];
  if(page==="shared")list=state.files.filter(f=>f.shared);
  if(page==="starred")list=state.files.filter(f=>f.starred);
  if(page==="public-links")list=state.files.filter(f=>f.publicLink);
  if(page==="recent")list=[...state.files].sort((a,b)=>b.modified-a.modified).slice(0,20);
  const titles={shared:["Shared With Me","Files shared with you"],starred:["Starred","Your important files"],recent:["Recent","Recently modified files"],"public-links":["Public Links","Files prepared for sharing"]};
  const t=titles[page];
  return `<section class="page"><div class="page-heading"><div><h1>${t[0]}</h1><p>${t[1]}</p></div><button class="primary" data-action="upload">${MyFilesNavigation.icon("upload")} Upload New</button></div>
    <div class="section-title"><h2>Files <em>(${list.length})</em></h2></div>
    <div class="files-grid">${list.length?list.map(fileCard).join(""):`<div class="empty">Nothing here yet.</div>`}</div></section>`;
}

function render(){
  const page=state.page;
  let content=page==="dashboard"?renderDashboard():page==="my-files"?renderMyFiles():renderSpecial(page);
  $("#app").innerHTML=shell(content);
  $$(".nav-link").forEach(a=>a.classList.toggle("active", a.dataset.page===state.page));
  bindDynamic();
}

function bindDynamic(){
  const sort=$("#sortSelect"); if(sort){sort.value=state.sort;sort.onchange=()=>{state.sort=sort.value;render()}}
  $$(".nav-link").forEach(a=>a.onclick=null);
  const search=$("#searchInput"); search.value=state.search;
  search.oninput=()=>{
    const q=search.value.trim();
    if(document.body.dataset.page!=="my-files"){
      sessionStorage.setItem("myfiles_pending_search",q);
      location.href="my-files.html";
      return;
    }
    state.search=q;
    state.folderId=null;
    render();
  };
  $("#menuButton").onclick=openMobile;
  $("#closeSidebar").onclick=closeMobile;
  $("#mobileOverlay").onclick=closeMobile;
  $(".account-chip").onclick=()=>{
    openModal("Account",`<p>Signed in as <b>Aditya Yadav</b>.</p><div class="modal-actions"><button class="danger-button" id="logoutButton" type="button">Logout</button></div>`);
    const logoutButton=$("#logoutButton");
    if(logoutButton) logoutButton.onclick=(e)=>{
      e.preventDefault();
      e.stopPropagation();
      logout();
    };
  };
  $("#settingsButton").onclick=()=>openModal("Settings",`<p>Settings are ready for you to customize. This starter is intentionally simple so you can add your own options later.</p><div class="modal-actions"><button class="primary" data-close-modal>Close</button></div>`);
  $("#helpButton").onclick=()=>openModal("Help",`<p><b>Folders:</b> open a folder before uploading. New folders created inside a folder become children of that folder.</p><p><b>Files:</b> uploads are stored in the selected folder. Use View, Download, Star, Share, Move and Delete from the file menu.</p><div class="modal-actions"><button class="primary" data-close-modal>Done</button></div>`);
  $("#notificationButton").onclick=()=>toast("No new notifications");
  $$("[data-go]").forEach(b=>b.onclick=()=>{state.page=b.dataset.go;state.folderId=null;location.href=b.dataset.go+".html"});
  $$("[data-action]").forEach(b=>b.onclick=()=>action(b.dataset.action,b));
  $$("[data-close-modal]").forEach(b=>b.onclick=closeModal);
}

function action(type,el){
  const id=el.dataset.id;
  if(type==="upload")openUpload();
  if(type==="new-folder")openNewFolder();
  if(type==="root-folder"){
    state.folderId=null;
    sessionStorage.removeItem("myfiles_current_folder");
    sessionStorage.removeItem("myfiles_current_folder_name");
    render();
  }
  if(type==="open-folder"){
    const folder=state.folders.find(f=>String(f.id)===String(id));
    if(!folder){
      toast("Folder not found");
      return;
    }
    state.folderId=folder.id;
    state.page="my-files";
    sessionStorage.setItem("myfiles_current_folder",String(folder.id));
    sessionStorage.setItem("myfiles_current_folder_name",folder.name);
    location.href="my-files.html";
  }
  if(type==="view"){state.view=el.dataset.view;render()}
  if(type==="star")toggleStar(id);
  if(type==="download")downloadFile(id);
  if(type==="view-file")viewFile(id);
  if(type==="more")openFileMenu(id);
  if(type==="folder-menu")openFolderMenu(id);
}

function openNewFolder(){
  const parent=state.folderId;
  openModal("Create New Folder",`
    <label class="form-label">Folder name</label><input id="newFolderName" class="form-input" placeholder="e.g. Work Reports">
    <p class="modal-note">Location: <b>${esc(currentFolderName())}</b></p>
    <div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="primary" id="createFolderBtn">Create Folder</button></div>`);
  $("#createFolderBtn").onclick=async()=>{
    const name=$("#newFolderName").value.trim();
    if(!name)return toast("Enter a folder name");
    if(folderChildren(parent).some(f=>f.name.toLowerCase()===name.toLowerCase()))return toast("Folder already exists here");
    const folder={id:uid("folder"),name,parentId:parent||null,created:Date.now()};
    await put(STORE_FOLDERS,folder);state.folders.push(folder);closeModal();render();toast("Folder created in "+currentFolderName());
  };
  $("#newFolderName").focus();
}

function openUpload(){
  const parent=state.folderId;
  openModal("Upload Files",`
    <div class="location-pill">${icons.folder} Upload location: <b>${esc(currentFolderName())}</b></div>
    <div class="dropzone" id="dropzone"><div class="upload-big">${MyFilesNavigation.icon("upload")}</div><b>Drag & drop files here</b><span>or</span><button class="secondary" id="chooseUpload">Choose Files</button></div>
    <div id="uploadQueue" class="upload-queue"></div>
    <div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="primary" id="startUpload">Add Files</button></div>`);
  const queue=[];
  const draw=()=>{$("#uploadQueue").innerHTML=queue.map((f,i)=>`<div class="upload-item"><span class="queue-icon">${iconFor(f.name,f.type)}</span><span>${esc(f.name)}<small>${bytes(f.size)}</small></span><button data-remove="${i}">×</button></div>`).join("");$$("[data-remove]").forEach(b=>b.onclick=()=>{queue.splice(+b.dataset.remove,1);draw()})};
  const add=list=>{[...list].forEach(f=>{if(!queue.some(q=>q.name===f.name&&q.size===f.size))queue.push(f)});draw()};
  $("#chooseUpload").onclick=()=>$("#filePicker").click();
  $("#filePicker").onchange=e=>add(e.target.files);
  const dz=$("#dropzone");["dragover","dragenter"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.add("drag")}));
  ["dragleave","drop"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.remove("drag")}));
  dz.addEventListener("drop",e=>add(e.dataTransfer.files));
  $("#startUpload").onclick=async()=>{
    if(!queue.length)return toast("Choose at least one file");
    for(const f of queue){
      const record={id:uid("file"),name:f.name,size:bytes(f.size),type:f.type||f.name.split(".").pop().toUpperCase(),mime:f.type,folderId:parent||null,created:Date.now(),modified:Date.now(),starred:false,shared:false,publicLink:false,blob:f};
      await put(STORE_FILES,record);
      state.files.push(record);
    }
    closeModal();state.search="";await load();render();toast(`${queue.length} file${queue.length>1?"s":""} added to ${currentFolderName()}`);
  };
}

async function toggleStar(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  f.starred=!f.starred;await put(STORE_FILES,f);await load();render();toast(f.starred?"Added to Starred":"Removed from Starred");
}

function openFileMenu(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  openModal("File Options",`
    <div class="menu-card"><div class="menu-file">${iconFor(f.name,f.mime)}<div><b>${esc(f.name)}</b><small>${f.size} • ${esc(f.type)}</small></div></div>
      <button data-menu-action="view" data-id="${id}">${icons.eye}<span>View</span></button>
      <button data-menu-action="download" data-id="${id}">${icons.download}<span>Download</span></button>
      <button data-menu-action="move" data-id="${id}">↗<span>Move to Folder</span></button>
      <button data-menu-action="rename" data-id="${id}">✎<span>Rename</span></button>
      <button data-menu-action="share" data-id="${id}">${MyFilesNavigation.icon("links")}<span>Share</span></button>
      <button data-menu-action="delete" data-id="${id}" class="danger-item">⌫<span>Delete</span></button>
    </div>`);
  $$("[data-menu-action]").forEach(b=>b.onclick=()=>menuAction(b.dataset.menuAction,b.dataset.id));
}
async function menuAction(type,id){
  closeModal();
  if(type==="view")viewFile(id);
  if(type==="download")downloadFile(id);
  if(type==="move")openMove(id);
  if(type==="rename")openRename(id);
  if(type==="share")openShare(id);
  if(type==="delete")deleteFile(id);
}

function openFolderMenu(id){
  const f=state.folders.find(x=>x.id===id);if(!f)return;
  openModal("Folder Options",`
    <div class="menu-card"><div class="menu-file">${icons.folder}<div><b>${esc(f.name)}</b><small>${folderItemCount(id)} items</small></div></div>
      <button data-folder-action="open" data-id="${id}">${icons.folder}<span>Open Folder</span></button>
      <button data-folder-action="rename" data-id="${id}">✎<span>Rename Folder</span></button>
      <button data-folder-action="delete" data-id="${id}" class="danger-item">⌫<span>Delete Folder</span></button>
    </div>`);
  $$("[data-folder-action]").forEach(b=>b.onclick=()=>folderAction(b.dataset.folderAction,b.dataset.id));
}
function folderAction(type,id){
  closeModal();
  if(type==="open"){
    const folder=state.folders.find(f=>String(f.id)===String(id));
    if(!folder){toast("Folder not found");return;}
    state.folderId=folder.id;
    sessionStorage.setItem("myfiles_current_folder",String(folder.id));
    sessionStorage.setItem("myfiles_current_folder_name",folder.name);
    location.href="my-files.html";
  }
  if(type==="rename")openRenameFolder(id);
  if(type==="delete")deleteFolder(id);
}
function openRename(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  openModal("Rename File",`<label class="form-label">File name</label><input id="renameInput" class="form-input" value="${esc(f.name)}"><div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="primary" id="renameSave">Save</button></div>`);
  $("#renameSave").onclick=async()=>{const n=$("#renameInput").value.trim();if(!n)return toast("Enter a name");f.name=n;await put(STORE_FILES,f);closeModal();await load();render();toast("File renamed")};
}
function openRenameFolder(id){
  const f=state.folders.find(x=>x.id===id);if(!f)return;
  openModal("Rename Folder",`<label class="form-label">Folder name</label><input id="renameFolderInput" class="form-input" value="${esc(f.name)}"><div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="primary" id="renameFolderSave">Save</button></div>`);
  $("#renameFolderSave").onclick=async()=>{const n=$("#renameFolderInput").value.trim();if(!n)return toast("Enter a name");f.name=n;await put(STORE_FOLDERS,f);closeModal();await load();render();toast("Folder renamed")};
}

function openMove(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  const options=[{id:null,name:"My Files (Root)"},...state.folders].map(x=>`<option value="${x.id||""}" ${x.id===(f.folderId||null)?"selected":""}>${esc(x.name)}</option>`).join("");
  openModal("Move File",`<label class="form-label">Move <b>${esc(f.name)}</b> to</label><select id="moveSelect" class="form-input">${options}</select><div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="primary" id="moveSave">Move File</button></div>`);
  $("#moveSave").onclick=async()=>{f.folderId=$("#moveSelect").value||null;await put(STORE_FILES,f);closeModal();await load();render();toast("File moved")};
}

function openShare(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  const link=`https://myfiles.example/share/${encodeURIComponent(f.id)}`;
  f.shared=true;f.publicLink=true;put(STORE_FILES,f);
  openModal("Share File",`<div class="share-file">${iconFor(f.name,f.mime)}<b>${esc(f.name)}</b></div><label class="form-label">Public link</label><input class="form-input" id="shareLink" readonly value="${link}"><div class="modal-actions"><button class="secondary" data-close-modal>Close</button><button class="primary" id="copyLink">Copy Link</button></div>`);
  $("#copyLink").onclick=async()=>{try{await navigator.clipboard.writeText(link);toast("Link copied")}catch(e){$("#shareLink").select();document.execCommand("copy");toast("Link copied")}};
}

async function deleteFile(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  openModal("Delete File",`<p>Delete <b>${esc(f.name)}</b>? This removes the file from MyFiles.</p><div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="danger-button" id="confirmDelete">Delete File</button></div>`);
  $("#confirmDelete").onclick=async()=>{await remove(STORE_FILES,id);closeModal();await load();render();toast("File deleted")};
}
async function deleteFolder(id){
  const f=state.folders.find(x=>x.id===id);if(!f)return;
  const descendants=getDescendants(id);
  const fileIds=state.files.filter(x=>x.folderId===id||descendants.includes(x.folderId)).map(x=>x.id);
  openModal("Delete Folder",`<p>Delete <b>${esc(f.name)}</b> and its contents? This will remove ${fileIds.length} file${fileIds.length===1?"":"s"} and child folders.</p><div class="modal-actions"><button class="secondary" data-close-modal>Cancel</button><button class="danger-button" id="confirmFolderDelete">Delete Folder</button></div>`);
  $("#confirmFolderDelete").onclick=async()=>{
    for(const fid of fileIds)await remove(STORE_FILES,fid);
    for(const fid of [id,...descendants])await remove(STORE_FOLDERS,fid);
    if(state.folderId===id||descendants.includes(state.folderId))state.folderId=null;
    closeModal();await load();render();toast("Folder deleted");
  };
}
function getDescendants(id){
  const result=[];
  const walk=parent=>state.folders.filter(f=>f.parentId===parent).forEach(f=>{result.push(f.id);walk(f.id)});
  walk(id);return result;
}

async function viewFile(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  if(!f.blob){openModal("View File",`<div class="preview"><div class="preview-icon">${iconFor(f.name,f.mime)}</div><h3>${esc(f.name)}</h3><div class="preview-box">This is a demo file. Upload the actual file to preview it here.</div></div>`);return}
  const blob=f.blob;
  if(blob.type.startsWith("image/")){
    const url=URL.createObjectURL(blob);
    openModal("View File",`<div class="preview"><h3>${esc(f.name)}</h3><img src="${url}" alt="${esc(f.name)}" class="image-preview"></div>`);
    return;
  }
  if(blob.type==="application/pdf"){
    const url=URL.createObjectURL(blob);
    openModal("View PDF",`<iframe class="pdf-preview" src="${url}" title="${esc(f.name)}"></iframe>`);
    return;
  }
  if(blob.type.startsWith("text/")||/\.(txt|csv|json)$/i.test(f.name)){
    const text=await blob.text();
    openModal("View File",`<div class="preview"><h3>${esc(f.name)}</h3><pre class="text-preview">${esc(text.slice(0,50000))}</pre></div>`);
    return;
  }
  openModal("View File",`<div class="preview"><div class="preview-icon">${iconFor(f.name,f.mime)}</div><h3>${esc(f.name)}</h3><div class="preview-box">Preview is not available for this file type.</div><div class="modal-actions"><button class="primary" data-download-from-view="${f.id}">${icons.download} Download</button></div></div>`);
  $("[data-download-from-view]").onclick=()=>downloadFile(id);
}

function downloadFile(id){
  const f=state.files.find(x=>x.id===id);if(!f)return;
  if(!f.blob)return toast("Demo file — upload the real file to download it");
  const url=URL.createObjectURL(f.blob), a=document.createElement("a");a.href=url;a.download=f.name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast("Download started");
}

function openModal(title,body){
  $("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#modal").classList.add("open");$("#modal").setAttribute("aria-hidden","false");
  $$("#modalBody [data-close-modal]").forEach(b=>b.onclick=closeModal);
}
function closeModal(){$("#modal").classList.remove("open");$("#modal").setAttribute("aria-hidden","true")}

function toast(message){const t=$("#toast");t.textContent=message;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
function openMobile(){$("#sidebar").classList.add("open");$("#mobileOverlay").classList.add("show")}
function closeMobile(){$("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show")}


const AUTH_KEY="myfiles_logged_in";
const DEMO_USERNAME="admin";
const DEMO_PASSWORD="MyFiles@123";

function isLoggedIn(){ return sessionStorage.getItem(AUTH_KEY)==="1"; }

function renderLogin(){
  document.body.className="login-body";
  $("#app").innerHTML=`
    <main class="login-page">
      <section class="login-card">
        <div class="login-brand">
          <div class="login-brand-icon">${icons.folder}</div>
          <div>My<span>Files</span></div>
        </div>
        <h1>Welcome back</h1>
        <p class="login-subtitle">Sign in to manage your files and folders.</p>
        <form id="loginForm" autocomplete="off">
          <label class="form-label">Username</label>
          <input id="loginUsername" class="form-input" value="admin" autocomplete="username" required>
          <label class="form-label">Password</label>
          <div class="password-wrap">
            <input id="loginPassword" class="form-input" type="password" placeholder="Enter password" autocomplete="current-password" required>
            <button type="button" id="togglePassword">Show</button>
          </div>
          <button class="primary login-button" type="submit">Login</button>
          <div id="loginError" class="login-error"></div>
        </form>
        <div class="demo-credentials">
          <strong>Default demo login</strong>
          <span>Username: <b>admin</b></span>
          <span>Password: <b>MyFiles@123</b></span>
        </div>
        <small class="login-warning">Demo authentication only. Do not use this password for a real production system.</small>
      </section>
    </main>`;
  $("#togglePassword").onclick=()=>{
    const input=$("#loginPassword");
    input.type=input.type==="password"?"text":"password";
    $("#togglePassword").textContent=input.type==="password"?"Show":"Hide";
  };
  $("#loginForm").onsubmit=e=>{
    e.preventDefault();
    const u=$("#loginUsername").value.trim();
    const p=$("#loginPassword").value;
    if(u===DEMO_USERNAME && p===DEMO_PASSWORD){
      sessionStorage.setItem(AUTH_KEY,"1");
      document.body.className="";
      location.href="dashboard.html";
      init();
    }else{
      $("#loginError").textContent="Incorrect username or password.";
    }
  };
}

function logout(){
  sessionStorage.removeItem(AUTH_KEY);
  closeModal();
  state.page="dashboard";
  state.folderId=null;
  state.search="";
  state.files=[];
  state.folders=[];
  document.body.className="login-body";
  location.href="login.html";
}

async function init(){
  if(document.body.dataset.page==="login"){
    if(isLoggedIn()) location.href="dashboard.html";
    else renderLogin();
    return;
  }
  if(!isLoggedIn()){
    renderLogin();
    return;
  }
  document.body.className="";
  $("#app").innerHTML=MyFilesNavigation.render()+`<main class="main-content"></main>`;
  state.db=await openDB();
  await seed();
  await load();

  if(document.body.dataset.page==="my-files"){
    const savedFolder=sessionStorage.getItem("myfiles_current_folder");
    if(savedFolder){
      const folder=state.folders.find(f=>String(f.id)===String(savedFolder));
      if(folder){
        state.folderId=folder.id;
      }else{
        state.folderId=null;
        sessionStorage.removeItem("myfiles_current_folder");
        sessionStorage.removeItem("myfiles_current_folder_name");
      }
    }

    const pending=sessionStorage.getItem("myfiles_pending_search");
    if(pending!==null){
      state.search=pending;
      sessionStorage.removeItem("myfiles_pending_search");
    }
  }
  $("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
  document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("#searchInput")?.focus()}if(e.key==="Escape")closeModal()});
  render();
}
init();
