# krishna-rani-t.github.io

Personal website of Krishna Rani. Plain HTML and CSS, no build step, hosted on GitHub Pages.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: intro, about, selected work |
| `research.html` | Master's thesis (HighSchoolBench), OntoLearner / OntoAligner, datasets |
| `projects.html` | FedLIME, RNA-to-protein, RAG, Bayes nets |
| `experience.html` | Research, industry, education |
| `skills.html` | Skills and where they were used |
| `contact.html` | Email and links |
| `404.html` | Shown for missing pages |

Shared files: `css/style.css` (all styling; colours and fonts are at the top in `:root`),
`js/main.js` (mobile menu, BibTeX copy button), `fonts/` (self-hosted, no Google requests),
`cv/Krishna_Rani_CV.pdf`, `images/profile.jpg` (add your photo).

## Editing

Open any `.html` file and change the text directly. The header and footer are repeated on
every page, so if you add a page or change a nav label, update it in all seven files.

To add a project, copy one `<li class="work-item">…</li>` block in `projects.html` and edit it.

## Preview locally

    python3 -m http.server 8000

then open http://localhost:8000.

## Fonts

Young Serif and Atkinson Hyperlegible, both under the SIL Open Font License (see `fonts/`).
