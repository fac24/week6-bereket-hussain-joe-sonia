# Week 6 project

## Bereket, Hussain, Joe, Sonia

### How to use

- View the app deployed on Vercel here: https://week6-bereket-hussain-joe-sonia.vercel.app/

- You can view all our products on the landing page.
- You can click a product name to view its individual product page.
- You **can't** add products to your basket or view your basket yet! (It's WIP :)
- Styles are broken because we haven't removed the bootstrapped ones that are made (when we created the project with ``create-next-app``).

### How to set up your own local development version

- ``git clone https://github.com/fac24/week6-bereket-hussain-joe-sonia.git``
- ``cd`` into the dir that was made.
- ``npm install`` (careful, it'll install Cypress! Edit ``package.json`` if you don't want it to :)
- Run ``./scripts/create_db`` from the project root directory.
- Run ``./scripts/populate_db``. Keep an eye out for errors - if either hit an error, they'll stop. You might need to fix something yourself.
- ``npm run dev``
- Open [http://localhost:3000/](http://localhost:3000/) in your web browser.

### Next steps

- Finish the basket functionality. Get a rough idea of how it's supposed to work by checking out our Figma sketches: https://www.figma.com/file/VqeBuI3rZ0eNwXJR4RmQGE/E-motion-E-commerce?node-id=0%3A1
- Finish styling.
