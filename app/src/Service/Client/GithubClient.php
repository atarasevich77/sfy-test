<?php

namespace App\Service\Client;

use Github\Client;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class GithubClient
{
    private $mockFilePath;

    private $client;

    /** @var NormalizerInterface */
    private $normalizer;

    public function __construct()
    {
        $this->client = new Client();
    }

    /**
     * @param int $page
     *
     * @return array
     */
    public function getCommitsByPage(int $page): array
    {
//        return $this->normalizer->normalize($this->getMockResponse());
        return $this->normalizer->normalize($this->getResponse($page));
    }

    /**
     * @param $page
     *
     * @return array
     */
    private function getResponse($page): array
    {
        return $this->client->repo()->commits()->all(
            'torvalds',
            'linux',
            [
                'page' => $page
            ]
        );
    }

    /**
     * @return array
     */
    private function getMockResponse(): array
    {
        $file = new \SplFileObject($this->mockFilePath);

        return \GuzzleHttp\json_decode($file->fread($file->getSize()), true);
    }

    /**
     * @param string $mockFilePath
     */
    public function setMockFilePath(string $mockFilePath)
    {
        $this->mockFilePath = $mockFilePath;
    }

    /**
     * @param NormalizerInterface $normalizer
     */
    public function setNormalizer(NormalizerInterface $normalizer)
    {
        $this->normalizer = $normalizer;
    }
}