const express = require('express');
const router = express.Router();
const multer = require('multer')
// const { storage } = require('../cloudinary');
const upload = multer({ dest: 'uploads/' })

const Listing = require('../models/Listing')

// @desc Listings page
// @route GET /listings/listing
router.get('/listing', (req, res) => {
    res.render('listings/listing')
})

// @desc Show Add Listing Page
// @route GET /add-listing
router.get('/add-listing', (req, res) => {
    res.render('listings/add-listing')
})

// @desc Add Listing
// @route POST /add-listing 
// router.route('/')
//     .post(upload.single('image'), async (req, res) => {
//     try {
//         let data = req.body
//         let image = req.file
//         await Listing.create(data, image)
//         res.redirect('/')
//     } catch (err) {
//         console.error(err)
//         console.log(err)
//         res.render('error/500')
//     }
// })

router.post(upload.single('image'), async (req, res) => {
    try {
      res.send(req.body, req.file)
      res.redirect('/')
    } catch (err) {
      console.error(err)
      res.render('error/404')
    }
  })
  

module.exports = router