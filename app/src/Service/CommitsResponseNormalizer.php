<?php

namespace App\Service;

use DateTime;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class CommitsResponseNormalizer implements NormalizerInterface
{
    /**
     * @param mixed $commits
     * @param null $format
     * @param array $context
     *
     * @return array
     */
    public function normalize($commits, $format = null, array $context = []): array
    {
        $result = [];

        foreach ($commits as $commit) {
            $commitResult = [
                'commit' => [
                    'id' =>  $commit['sha'],
                    'date' => (new DateTime($commit['commit']['committer']['date']))->format('Y-m-d'),
                    'message' => $commit['commit']['message'],
                ],
                'committer' => [
                    'name' => $commit['commit']['committer']['name'],
                    'email' => $commit['commit']['committer']['email'],
                ],
            ];

            if ($committer = $commit['committer']) {
                $commitResult['committer']['id'] = $committer['id'];
                $commitResult['committer']['avatar_url'] = $committer['avatar_url'];
                $commitResult['committer']['repos_url'] = $committer['repos_url'];
                $commitResult['committer']['organizations_url'] = $committer['organizations_url'];
                $commitResult['committer']['html_url'] = $committer['html_url'];
            } else {
                $commitResult['committer']['id'] = null;
                $commitResult['committer']['avatar_url'] = null;
                $commitResult['committer']['repos_url'] = null;
                $commitResult['committer']['organizations_url'] = null;
                $commitResult['committer']['html_url'] = null;
            }

            $result[] = $commitResult;
        }

        return $result;
    }

    /**
     * @param mixed $data
     * @param null $format
     *
     * @return bool
     */
    public function supportsNormalization($data, $format = null)
    {
        return true;
    }
}