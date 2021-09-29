---
title: Translations
hide_title: false
hide_table_of_contents: false
description: Instructions to add or update translations
keywords:
  - moodle
  - notification
  - bot
  - contribution
  - translation
---

This article guides you through all tasks related to the language support of the service. Have a look on the table of contents to find your topic faster!

# Frontend

The content below describes the usage of the [vue-i18n](https://kazupon.github.io/vue-i18n/) plugin at the frontend.

:::note
All files and commands mentioned below are relative to the `packages/frontend/` folder. All translations are located inside `src/locales/` and use the JSON document structure.
:::

The JSON files follow the same structure as our code directories, which is why the top level entries are `components`, `layouts` and `views`, which contain the names of the `.vue` files within the directory, eg. `administratorList`. These names contain another set of keys, which is labelled after their function within their parent components. Here is an example to make this a bit more clear: We have a _component_ _AdministratorList.vue_ which has a _button_, that creates a _new registration token_. The translation-key of this button is `components.administratorList.createNewRegistrationTokenButton`. So as you can see, we try to use a descriptive approach on our translation-keys, so we can quickly find out their usecase while making them easily translatable.

The `general` section contains more generic words like `update`, which are used by multiple components. All notifications have their separate key within their component, eg the `Access Expired` message has the translation-key `general.notifications.accessExpired`.

## Add a new language

The easiest way to add a new language, is to duplicate the english translation file (`src/locales/en.json`) to a new JSON file in the same directory with your languages shortcode, eg. `de.json` for german, etc.

After you added the new translation file, you are ready to translate! It is always preferred to have another person checked your translation 


If you are not a native speaker  It's preferred to have native speakers of the given language to take a look at the translation, to mitigate incorrect translations that might occur when using some translation program.

The last required step is to modify `src/components/TheLanguageSwitch.vue`, to add your translation to the switch. Inside the data method, there is an array called `langs`, where you have to add your language to, according to the given schema:
```js
data: () => ({
  langs: [
    { key: 'en', name: 'English' },
    { key: 'de', name: 'Deutsch' },
  ],
}),
```

## Using the translate function

If you want to add a translate function to your Vue code, there are two methods you have to differentiate:

* Inside a template
  Inside a vue html template, you can simply use the following syntax to translate some key:
  ```html
  <p>{{ $t('general.someTranlsation') }}</p>
  ```
  When binding to a label, you have to use vue-binds:
  ```html
  <input :label="$t('component.example.someLabel')"></input>
  ```
* Inside js code
  Inside you js code, you can use the translation by invoking
  ```js
  this.$t('general.someTranslation');
  ```

  For some scenarios like vue tables, this doesn't work, so you have to import and use i18n manually:
  ```js
  import i18n from '@/i18n';
  ...
  i18n.t('general.someTranslation');
  ```



## Retrieve overview of current translation state

Vues i18n library has an integrated overview of your current translation state. To use it, simply run
`npm run i18n:report`.

If your language file is missing a translation, you'll be reported with the following overview:

```
┌────┬────────────┬────────────────────────────────────────┬────────┬──────────────────────────────┐
│ #  │ Language   │ File                                   │ Line   │ Missing i18n Entry           │
├────┼────────────┼────────────────────────────────────────┼────────┼──────────────────────────────┤
│ 0  │ fr         │ …administration/AdministratorList.vue  │ 16     │ components.administratorLis… │
└────┴────────────┴────────────────────────────────────────┴────────┴──────────────────────────────┘
```
which shows you, that the file `src/components/administration/AdministratorList.vue` is missing the translation used in line 16, which is indeed the key that I have removed from the json file in this example.

If you have an unused entry in one of the translation files, this will also be reported by the command. To simulate this, I removed the logout button translation from the navbar, which resultet in the following statement:

```
┌────┬────────────┬────────────────────────────────────────┬──────┬───────────────────────────────────┐
│ #  │ Language   │ File                                   │ Line │ Unused i18n Entry                 │
├────┼────────────┼────────────────────────────────────────┼──────┼───────────────────────────────────┤
│ 0  │ de         │ /src/locales/de.json                   │ 47   │ components.theNavBar.logoutButton │
│ 1  │ en         │ /src/locales/en.json                   │ 47   │ components.theNavBar.logoutButton │
└────┴────────────┴────────────────────────────────────────┴──────┴───────────────────────────────────┘
```

If everything is fine, you'll be presented with two empty tables:

```
┌────┬────────────┬────────────────────────────────────────┬────────┬──────────────────────────────┐
│ #  │ Language   │ File                                   │ Line   │ Missing i18n Entry           │
└────┴────────────┴────────────────────────────────────────┴────────┴──────────────────────────────┘
┌────┬────────────┬────────────────────────────────────────┬──────┬───────────────────┐
│ #  │ Language   │ File                                   │ Line │ Unused i18n Entry │
└────┴────────────┴────────────────────────────────────────┴──────┴───────────────────┘
``` 