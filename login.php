<?php

$error = "";

// When user clicks Login button
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Fetch input values
    $email = $_POST["email"];
    $password = $_POST["pwd"];

    // Dummy login
    $correctEmail = "krrishgupta458@gmail.com";
    $correctPassword = "krrish";

    if ($email == $correctEmail && $password == $correctPassword) {
        // Redirect on success
        header("Location: index.php");
        exit();
    } else {
        $error = "Invalid email or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="app.css">
  <title>Login - GCET</title>
</head>
<body>
  <div class="login-container">
      <div class="login1">

       <section class="login-section-1">
         <h2>Government College of Engineering & Technology</h2>
         <p>Official College website</p>
        </section>
        
        <section class="login-section-2">

          <!-- Display error message -->
          <?php if ($error != ""): ?>
            <p style="color:red; text-align:center; font-weight:bold;">
              <?php echo $error; ?>
            </p>
          <?php endif; ?>

          <div class="login-box">

            <form action="" method="POST">
              <input type="email" name="email" placeholder="Email address" required>
              <input type="password" name="pwd" placeholder="Password" required>
              
              <button type="submit" class="login-button">Login</button>
            </form>

            <a class="login-pwd-button" href="forgot_password.php">Forgot Password ?</a>
          </div>

          <div class="create-account">
            <a class="ca1" href="signup.php">Create an account</a>
          </div>

        </section>

        </div>
  </div>
</body>
</html>

