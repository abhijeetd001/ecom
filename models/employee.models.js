const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a employee name"]
        },
        salary: {
            type: Number,
            required: false,
            default: 0
        },
        isEmployee: {
            type: Boolean,
            required: true,
            default: false
        },
        company: {
            type: String,
            required: false,
            default: "wovvx"
        }
    },
    {
        timestamps: true
    }
)

// employeeSchema.pre('save', async function (next) {
//     console.log('employee about to be created & saved ==>>>>', this);
//     next();
//   });

//   employeeSchema.post('save', async function (doc, next) {
//     console.log('new user was created & saved ==>>>>', doc);
//     next();
//   });
  

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;