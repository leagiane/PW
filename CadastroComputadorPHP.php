<?php

$dados=$_POST;
var_dump($dados);

include "Computador.php";

extract ($_POST);


$chkAtualizado =isset ($_POST['chkAtualizado']);

$novoCadastro=new Computador($txtProcessador,$txtUSB,$chkAtualizado,'2022-02-21 09:30:00'); 
$= $_POST['txtProcessador'];


$novoCadastro->Cadastrar();

