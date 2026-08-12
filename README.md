# MyFiles — Separate HTML Pages

This version uses:

- A separate HTML page for every main section.
- One shared CSS file.
- One shared JavaScript file.

## Pages

- `login.html`
- `dashboard.html`
- `my-files.html`
- `shared.html`
- `recent.html`
- `starred.html`
- `public-links.html`

## Shared files

- `css/style.css` — all styling
- `js/app.js` — navigation, icons, login, file/folder logic, IndexedDB and interactions

## Default login

Username: `admin`

Password: `MyFiles@123`

## Folder behavior

Create a folder while inside another folder and it becomes a child of that folder.

Upload files while inside a folder and they are saved to that folder.

Nested folders, move, rename, delete, star, view, download and search are supported.

## Important

This remains a browser-only HTML/CSS/JavaScript project. IndexedDB provides local browser persistence. Real multi-user login and public cloud file sharing require a backend/storage service.


## Navigation fix
All sidebar links now point directly to their own `.html` files. No hash routing is used:
`dashboard.html`, `my-files.html`, `shared.html`, `recent.html`, `starred.html`, and `public-links.html`.


## Created-folder opening fix
Newly created folders now open correctly. The selected folder ID is stored in sessionStorage before `my-files.html` loads, then restored after IndexedDB finishes loading. This also works for nested folders.


## Folder click fix (latest)
Folder cards now save the selected folder ID before navigating to the separate `my-files.html` page. The ID is restored after IndexedDB loads, so both existing and newly-created folders open correctly. Folder Options → Open Folder uses the same logic.
