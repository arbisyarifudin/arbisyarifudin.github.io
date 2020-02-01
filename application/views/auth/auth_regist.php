<h1>Create Account</h1>
<form method="post" action="<?= base_url('auth/registration') ?>">
    <label>Full name</label>
    <input type="text" name="fullname" value="<?= set_value('fullname'); ?>">
    <?= form_error('fullname', '<span class="text-danger">', '</span>'); ?>
    <br>
    <label>Username</label>
    <input type="text" name="username" value="<?= set_value('username'); ?>">
    <?= form_error('username', '<span class="text-danger">', '</span>'); ?>
    <br>
    <label>Email</label>
    <input type="text" name="email" value="<?= set_value('email'); ?>">
    <?= form_error('email', '<span class="text-danger">', '</span>'); ?>
    <br>
    <label>Password</label>
    <input type="password" name="password1">
    <?= form_error('password1', '<span class="text-danger">', '</span>'); ?>
    <br>
    <label>Repeat Password</label>
    <input type="password" name="password2">
    <?= form_error('password2', '<span class="text-danger">', '</span>'); ?>
    <br>
    <button type="submit">Create New Account</button>
</form>

<a href="<?= base_url('auth') ?>">Login</a>
