<?php

namespace App\Controller;

use App\Service\Client\GithubClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class GithubController extends AbstractController
{
    /** @var GithubClient */
    private $client;

    /**
     * @Route(name="get_commits_by_page",
     *     path="/api/github/commits/{page}",
     *     requirements={"page"="\d+"},
     *     methods={"GET"}
     * )
     *
     * @param int $page
     *
     * @return JsonResponse
     */
    public function getCommitsByPageAction(int $page) {
        return new JsonResponse(
            [
                'page' => $page,
                'commits' => $this->client->getCommitsByPage($page)
            ]
        );
    }

    public function setGithubClient(GithubClient $client)
    {
        $this->client = $client;
    }
}