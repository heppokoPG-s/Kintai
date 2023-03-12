<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\postTestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/inputForm', [postTestController::class,'inputForm']); // 入力フォーム画面(inputForm)のURL割当、起動コントローラ・関数指定
Route::post('/formPost', [postTestController::class,'formPost']);//結果画面(resultPage)のURL割当、起動コントローラ・関数指定