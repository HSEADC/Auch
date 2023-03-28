const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
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
      filename: './index.html'
      // chunks: ['index']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards.html',
      filename: './cards.html'
      // chunks: ['page']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/extras/main.html',
      filename: './extras/main.html'
      // chunks: ['page']
    }),

    // Articles page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles.html',
      filename: './articles.html'
      // chunks: ['page']
    }),

    // Quizes page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/quizes.html',
      filename: './quizes.html'
      // chunks: ['page']
    }),

    // fireEscape quiz page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/quizes/fire_escape.html',
      filename: './quizes/fire_escape.html'
      // chunks: ['page']
    }),

    // burn card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/burn.html',
      filename: './cards/burn.html'
      // chunks: ['page']
    }),

    // insects card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/insectscard.html',
      filename: './cards/insectscard.html'
      // chunks: ['page']
    }),

    // sunstroke card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/sunstroke.html',
      filename: './cards/sunstroke.html'
      // chunks: ['page']
    }),

    // frostbite card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/frostbite.html',
      filename: './cards/frostbite.html'
      // chunks: ['page']
    }),

    // twist card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/twist.html',
      filename: './cards/twist.html'
      // chunks: ['page']
    }),

    // stretch card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/stretch.html',
      filename: './cards/stretch.html'
      // chunks: ['page']
    }),

    // dehydration card page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/cards/dehydration.html',
      filename: './cards/dehydration.html'
      // chunks: ['page']
    }),

    // temporary about page for prosmotr
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html'
      // chunks: ['page']
    }),

    // A page for an article "Как собраться в пустыню"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/desert.html',
      filename: './articles/desert.html'
      // chunks: ['page']
    }),

    // A page for an article "Детка, ты в огне"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/baby_on_fire.html',
      filename: './articles/baby_on_fire.html'
      // chunks: ['page']
    }),

    // A page for an article "Удивительный мир грибов"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/mushrooms.html',
      filename: './articles/mushrooms.html'
      // chunks: ['page']
    }),

    // A page for an article "10 самых badass змей"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/snakes.html',
      filename: './articles/snakes.html'
      // chunks: ['page']
    }),

    // A page for an article "Земля уходит из-под ног"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/earthquake.html',
      filename: './articles/earthquake.html'
      // chunks: ['page']
    }),

    // A page for an article "Слишком много воды"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/water.html',
      filename: './articles/water.html'
      // chunks: ['page']
    }),

    // A page for an article "А у нас в квартире газ!"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/gas.html',
      filename: './articles/gas.html'
      // chunks: ['page']
    }),

    // A page for an article "Клещи против комаров"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/insects.html',
      filename: './articles/insects.html'
      // chunks: ['page']
    }),

    // A page for an article "Выживешь ли ты под лавиной?"
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/avalanche.html',
      filename: './articles/avalanche.html'
      // chunks: ['page']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/errors/404.html',
      filename: './errors/404.html'
      // chunks: ['page']
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
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
