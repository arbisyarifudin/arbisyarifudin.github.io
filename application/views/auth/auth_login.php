<h1>Login Page</h1>
<?php 
if ($this->session->flashdata("msg")) {
    echo $this->session->flashdata('msg');
}
?>

<form method="post" action="<?= base_url('auth') ?>">
    <label>Username or Email</label>
    <input type="text" name="username"  value="<?= set_value('username'); ?>">
    <?= form_error('username', '<span class="text-danger">', '</span>'); ?>
    <br>
    <label>Password</label>
    <input type="password" name="password"  value="<?= set_value('password'); ?>">
    <?= form_error('password', '<span class="text-danger">', '</span>'); ?>
    <br>
    <button type="submit">Login</button>
</form>

<a href="<?= base_url('auth/registration') ?>">Create Account</a>
<a href="<?= base_url('auth/reset') ?>">Forgot Password?</a>