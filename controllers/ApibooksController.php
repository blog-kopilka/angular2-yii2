<?php

namespace app\controllers;

class ApibooksController extends \yii\rest\ActiveController
{
    public $modelClass = 'app\models\Books';

    public function behaviors()
    {
        return \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
            'corsFilter' => [
                'class' => \yii\filters\Cors::className(),
            ],
        ]);
    }
}
