import express from 'express';
import passport from 'passport';
import Calculation from '../../models/Calculation';

const router = express.Router();

// @route   POST api/calculation/
// @desc    Save calculation
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newCalculation = {
      title: req.body.title,
      user: req.user.id,
      calculation: req.body.calculation
    };

    // Check if title already in use, if so update calculation
    // with that title. Otherwise create new calculation.
    Calculation.findOne({
      user: req.user.id,
      title: req.body.title
    }).then(calculation => {
      if (calculation) {
        return Calculation.findOneAndUpdate(
          {
            user: req.user.id,
            title: req.body.title
          },
          { $set: newCalculation },
          { new: true }
        ).then(updatedCalculation => res.json(updatedCalculation));
      }
      return new Calculation(newCalculation).save()
        .then(savedCalc => res.json(savedCalc));
    }).catch(err => {
      console.log(err);
    });
  }
);

// @route   GET api/calculation/:calculation_id
// @desc    Get calculation by id
// @access  Private
router.get(
  '/:calculation_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Calculation.findById(req.params.calculation_id)
      .then(calculation => {
        if (calculation.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
        }
        return res.json(calculation);
      })
      .catch(err => console.log(err));
  }
);

// @route   GET api/calculation/
// @desc    Get all calculations for User
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Calculation.find({ user: req.user.id })
      .then(calculations => res.json(calculations))
      .catch(err => console.log(err));
  }
);

// @route   DELETE api/calculation/:calculation_id
// @desc    Delete calculation with ID
// @access  Private
router.delete(
  '/:calculation_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Calculation.findById(req.params.calculation_id)
      .then(calculation => {
        if (calculation.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: 'User not authorized' });
        }
        calculation.remove()
          .then(() => res.json({ calculation: 'Calculation removed successfully' }))
          .catch(err => res.status(404).json(err));
      })
      .catch(() => res.status(404).json({
        calculation: 'No Calculation found with that ID'
      }));
  }
);

module.exports = router;