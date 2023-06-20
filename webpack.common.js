const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    fire_escape: './src/javascript/fire_escape.js',
    what_danger: './src/javascript/what_danger.js',
    navbar: './src/javascript/navbar.js',
    article: './src/javascript/article.js',
    search: './src/search.js',
    searchBar: './src/searchbar.jsx',
    universal_tag: './src/javascript/universal_tag.js',
    back_button: './src/javascript/back_button.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'navbar']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['navbar', 'index']
    }),

    // Articles page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['navbar', 'index']
    }),

    // Quizes page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/quizes.html',
      filename: './quizes.html',
      chunks: ['navbar', 'index']
    }),

    // fireEscape quiz page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/quizes/fire_escape.html',
      filename: './quizes/fire_escape.html',
      chunks: ['index', 'fire_escape', 'navbar']
    }),

    // whatDanger quiz page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/quizes/what_danger.html',
      filename: './quizes/what_danger.html',
      chunks: ['index', 'what_danger', 'navbar']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'navbar', 'search']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/burn.html',
      filename: './cards/burn.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/apacheSos.html',
      filename: './cards/apacheSos.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/bearMeeting.html',
      filename: './cards/bearMeeting.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/brokenBone.html',
      filename: './cards/brokenBone.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/lost.html',
      filename: './cards/lost.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/someoneDrowning.html',
      filename: './cards/someoneDrowning.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/insectscard.html',
      filename: './cards/insectscard.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/sunstroke.html',
      filename: './cards/sunstroke.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/frostbite.html',
      filename: './cards/frostbite.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/stretch.html',
      filename: './cards/stretch.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/dehydration.html',
      filename: './cards/dehydration.html',
      chunks: ['navbar', 'index']
    }),

    // A page for an article "Как собраться в пустыню"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/desert.html',
      filename: './articles/desert.html',
      chunks: ['navbar', 'index', 'article']
    }),

    // A page for an article "Детка, ты в огне"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/baby_on_fire.html',
      filename: './articles/baby_on_fire.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "Удивительный мир грибов"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/mushrooms.html',
      filename: './articles/mushrooms.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "10 самых badass змей"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/snakes.html',
      filename: './articles/snakes.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "Земля уходит из-под ног"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/earthquake.html',
      filename: './articles/earthquake.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "Слишком много воды"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/water.html',
      filename: './articles/water.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "А у нас в квартире газ!"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/gas.html',
      filename: './articles/gas.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "Клещи против комаров"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/insects.html',
      filename: './articles/insects.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    // A page for an article "Выживешь ли ты под лавиной?"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/avalanche.html',
      filename: './articles/avalanche.html',
      chunks: ['navbar', 'index', 'article', 'universal_tag']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './404.html',
      filename: './404.html',
      chunks: ['navbar', 'index', 'back_button']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/download_pages/forest_down.html',
      filename: './download_pages/forest_down.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/download_pages/mountain_down.html',
      filename: './download_pages/mountain_down.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/download_pages/must_down.html',
      filename: './download_pages/mountain_down.html',
      chunks: ['navbar', 'index']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/download_pages/river_down.html',
      filename: './download_pages/river_down.html',
      chunks: ['navbar', 'index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  // optimization: {
  //   minimizer: [new CssMinimizerPlugin({
  //     exclude: [/docs/]
  //   })]
  // }
}
