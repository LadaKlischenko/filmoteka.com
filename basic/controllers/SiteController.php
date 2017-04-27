<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;

use app\models\Films;
use app\models\AccessOfAdmins;
use app\models\Actors;
use app\models\Admins;
use app\models\Clients;
use app\models\ContactForm;
use app\models\Directors;
use app\models\Genres;
use app\models\LoginForm;
use app\models\MailAdmins;
use app\models\MailClients;
use app\models\Reviews;
use app\models\Role;
use app\models\User;

use yii\data\Pagination;

class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $query = films::find();
        $pagination = new Pagination([
            'defaultPageSize' => 5,
            'totalCount' => $query->count()

            ]);

        $posts = $query->orderBy(['Year' => SORT_DESC])
        ->offset($pagination->offset)
        ->limit($pagination->limit)
        ->all();


        return $this->render('index', [
          'posts' => $posts,
          'active_pages' => Yii::$app->request->get("page",1),
          'count_pages' => $pagination->getPageCount(),
          'pagination' => $pagination
            ]);
    }

        public function actionActors() {
            $actors = actors::find()->orderBy(['ID_act' => SORT_DESC]) -> all();

            return $this->render('actors', ['actors'=> $actors]);
        }

        // public function selectActors(films.Name){
        //     $selectA = actors::find()
        // }

        public function actionDirectors() {
            $directors = directors::find()->orderBy(['ID_dir' => SORT_DESC]) -> all();

            return $this->render('director', ['directors'=> $directors]);
        }


        public function actionReviews() {
            $reviews = reviews::find() -> orderBy(['ID_OfReview' => SORT_DESC])->all();
            return $this->render('review', [
                'reviews'=>$reviews
                ]);
        }

    /**
     * Login action.
     *
     /*@return string
     */
    /*public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        }
        return $this->render('login', [
            'model' => $model,
        ]);
    }

    /**
     * Logout action.
     *
     * @return string
     */
    /*public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return string
     */
    /*public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    /*public function actionAbout()
    {
        return $this->render('about');
    }
}
*/
}