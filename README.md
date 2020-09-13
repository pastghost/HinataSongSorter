# charasort
A web based character sorter. Allows users to run through a manual merge sort of their favorite
characters from a set.

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.

## Related Sorters
Several others have created other sorters based on other concepts and series, see them [here](https://github.com/execfera/charasort/wiki)!

## Creating Your Own Sorter
This is a list of things you need to change for your sorter, for each file.

 * `index.html`
   * Sorter name: Change under `starting start button` and the `<title>` tags.
   * Starting banner images: 400px x 400px, under `left sort image` and `right sort image`.
   * OpenGraph tags: `og:site_name`, `og:description` and `og:image` will show up on embeds when linked to social media such as Facebook, Twitter and Discord.
   * Sorter info: Insert whatever you like under the `info` tag.
   * Website icon: Remember to get your own `favicon.ico`!

 * `src/js/data.js`

    Change `imageRoot` if you are not uploading your images to imgur.

 * `src/js/data/YYYY-MM-DD.js`

    Creating your own set of data is relatively simple. First, change the `dataSetVersion` date to the date when you are creating the dataset. Example: `dataSetVersion = 2018-02-20`. The actual filename does not matter, it is just for your own easy reference.

    Further down, each file comprises of two sets of data: `characterData` and `options`.

    `characterData` is an array of objects filled with character data. Its layout is as follows.

    ```
    {
      name: string,
      img: string
    }
    ```

    Parameters:

    * `name`: The name of the character to be displayed. **Required.**
    * `img`: An image filename of the character, in 120px x 180px, to be added to `imageRoot` in `data.js`. **Required.**

    Example:

    ```
    {
      name: "Flandre Scarlet",
      img: "OhaDcnc.png"
    }
    ```
    

## Updating Your Own Sorter

When you need to add more characters to your sorter, you must create a new data file with a new date, and include it in your `index.html` file under the `<script src="src/js/data.js"></script>` line, while keeping your previous data files also included.

The script will automatically get the latest version, but will retain the previous versions in case someone keeps a shareable link from one of the previous versions.

## Credits

 * [execfera](https://github.com/execfera/charasort) for the base code.
 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
