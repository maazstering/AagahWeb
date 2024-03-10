import bcrypt from "bcrypt";
//for storing password in hashinh wala form for security
export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};


//when user wants to login then compare the password 

export const comparePassword =(password, hashed)=>{
    return bcrypt.compare(password,hashed)
}